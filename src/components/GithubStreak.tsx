import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Award, Star, Calendar, AlertCircle } from 'lucide-react';

interface GitHubStreakProps {
    username?: string;
    darkMode: boolean;
    className?: string;
    onStreakLoaded?: (streak: number) => void;
}

interface StreakData {
    currentStreak: number;
    longestStreak: number;
    totalContributions: number;
    lastContributionDate: string;
}

const GitHubStreak = ({ username = 'danielnine9', darkMode, className = '', onStreakLoaded }: GitHubStreakProps) => {
    const [streakData, setStreakData] = useState<StreakData>({
        currentStreak: 0,
        longestStreak: 0,
        totalContributions: 0,
        lastContributionDate: '',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStreakData = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const token = import.meta.env.VITE_GITHUB_TOKEN;
                if (!token) {
                    throw new Error('GitHub token is missing. Please set VITE_GITHUB_TOKEN in your environment.');
                }

                const query = `
                    query ($username: String!) {
                        user(login: $username) {
                            contributionsCollection {
                                contributionCalendar {
                                    totalContributions
                                    weeks {
                                        contributionDays {
                                            date
                                            contributionCount
                                        }
                                    }
                                }
                            }
                        }
                    }
                `;

                const response = await fetch('https://api.github.com/graphql', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query,
                        variables: { username },
                    }),
                });

                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.statusText}`);
                }

                const apiData = await response.json();
                if (apiData.errors) {
                    throw new Error(apiData.errors.map((e: any) => e.message).join(', '));
                }

                const streakInfo = calculateStreakFromContributions(apiData);
                setStreakData(streakInfo);
                if (onStreakLoaded) {
                    onStreakLoaded(streakInfo.currentStreak);
                }
            } catch (err) {
                console.error('Error fetching GitHub streak:', err);
                setError('Failed to load GitHub streak data. Showing simulated data.');
                const fallbackData = simulateStreakData();
                setStreakData(fallbackData);
                if (onStreakLoaded) {
                    onStreakLoaded(fallbackData.currentStreak);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchStreakData();
    }, [username, onStreakLoaded]);

    const calculateStreakFromContributions = (data: any): StreakData => {
        const calendar = data?.data?.user?.contributionsCollection?.contributionCalendar;
        if (!calendar) {
            throw new Error('Invalid GitHub API response');
        }

        const weeks = calendar.weeks;
        const totalContributions = calendar.totalContributions;
        const allDays = weeks.flatMap((week: any) => week.contributionDays).sort(
            (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        let currentStreak = 0;
        let longestStreak = 0;
        let tempStreak = 0;
        let lastDate = '';

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (const day of allDays) {
            if (day.contributionCount > 0) {
                lastDate = day.date;
                break;
            }
        }

        let expectedDate = new Date(today);
        for (const day of allDays) {
            const dayDate = new Date(day.date);
            dayDate.setHours(0, 0, 0, 0);

            if (dayDate.getTime() === expectedDate.getTime() && day.contributionCount > 0) {
                currentStreak++;
                expectedDate.setDate(expectedDate.getDate() - 1);
            } else {
                break;
            }
        }

        for (const day of allDays.slice().reverse()) {
            if (day.contributionCount > 0) {
                tempStreak++;
                longestStreak = Math.max(longestStreak, tempStreak);
            } else {
                tempStreak = 0;
            }
        }

        return {
            currentStreak,
            longestStreak,
            totalContributions,
            lastContributionDate: lastDate,
        };
    };

    const simulateStreakData = (): StreakData => {
        const today = new Date();
        return {
            currentStreak: 5,
            longestStreak: 14,
            totalContributions: 231,
            lastContributionDate: today.toISOString().split('T')[0],
        };
    };

    const formatDate = (dateString: string) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`mx-auto ${className}`}
        >
            <motion.div
                className={`${
                    darkMode ? 'bg-slate-800/80 border-slate-700/50' : 'bg-white border-gray-200'
                } p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}
            >
                <h3 className={`text-xl sm:text-2xl font-semibold text-center flex items-center justify-center ${
                    darkMode ? 'text-blue-300' : 'text-blue-700'
                }`}>
                    <Flame className={`w-6 h-6 mr-2 ${darkMode ? 'text-blue-500' : 'text-blue-600'}`} />
                    GitHub Streak
                </h3>
                {error && (
                    <div className={`mb-4 p-3 ${
                        darkMode ? 'bg-yellow-900/30 text-yellow-200' : 'bg-yellow-100 text-yellow-800'
                    } rounded flex items-start`}>
                        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{error}</p>
                    </div>
                )}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ scale: 1.03, y: -5 }}
                        className={`p-4 rounded-lg text-center ${
                            darkMode ? 'bg-blue-900/40' : 'bg-blue-50/80'
                        }`}
                    >
                        <Flame className={`w-8 h-8 mx-auto ${darkMode ? 'text-blue-500' : 'text-blue-600'} mb-2`} />
                        <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                            Current Streak
                        </p>
                        <p className={`text-2xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                            {streakData.currentStreak} days
                        </p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.03, y: -5 }}
                        className={`p-4 rounded-lg text-center ${
                            darkMode ? 'bg-blue-900/40' : 'bg-blue-50/80'
                        }`}
                    >
                        <Award className={`w-8 h-8 mx-auto ${darkMode ? 'text-blue-500' : 'text-blue-600'} mb-2`} />
                        <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                            Longest Streak
                        </p>
                        <p className={`text-2xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                            {streakData.longestStreak} days
                        </p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.03, y: -5 }}
                        className={`p-4 rounded-lg text-center ${
                            darkMode ? 'bg-blue-900/40' : 'bg-blue-50/80'
                        }`}
                    >
                        <Star className={`w-8 h-8 mx-auto ${darkMode ? 'text-blue-500' : 'text-blue-600'} mb-2`} />
                        <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                            Total Contributions
                        </p>
                        <p className={`text-2xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                            {streakData.totalContributions}
                        </p>
                    </motion.div>
                </div>
                <div className={`mt-4 text-center text-sm ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                } flex items-center justify-center`}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Last contribution: {formatDate(streakData.lastContributionDate)}
                </div>
            </motion.div>
        </motion.section>
    );
};

export const getStreakMessage = (streak: number): string => {
    if (streak === 0) return "Start your GitHub streak today!";
    if (streak === 1) return "You're on the board! Keep it going!";
    if (streak <= 3) return "Nice start! You're building momentum!";
    if (streak <= 7) return "Awesome! You've been coding for a week straight!";
    if (streak <= 14) return "Impressive two-week streak! You're committed!";
    if (streak <= 30) return "A month of consistent contributions! Outstanding!";
    if (streak <= 60) return "Two months strong! You're a coding machine!";
    if (streak <= 100) return "100+ days! You're in the coding elite now!";
    return "Legendary streak! Your commitment is inspiring!";
};

export default GitHubStreak;