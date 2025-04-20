import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Calendar, Activity, AlertCircle } from 'lucide-react';

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface ContributionData {
    totalContributions: number;
    weeks: ContributionDay[][];
}

interface ContributionBlockProps {
    count: number;
    date: string;
    level: number;
    darkMode: boolean;
}

const ContributionBlock = ({ count, date, level, darkMode }: ContributionBlockProps) => {
    const getColor = (level: number) => {
        if (level === 0) return darkMode ? 'bg-slate-700' : 'bg-gray-200';
        if (level === 1) return darkMode ? 'bg-blue-900' : 'bg-blue-100';
        if (level === 2) return darkMode ? 'bg-blue-800' : 'bg-blue-200';
        if (level === 3) return darkMode ? 'bg-blue-700' : 'bg-blue-300';
        return darkMode ? 'bg-blue-600' : 'bg-blue-400';
    };

    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            className={`w-3 h-3 rounded-sm ${getColor(level)} transition-colors duration-200`}
            title={`${count} contributions on ${date}`}
        />
    );
};

interface GitHubContributionsProps {
    darkMode: boolean;
}

const GitHubContributions = ({ darkMode }: GitHubContributionsProps) => {
    const [contributionData, setContributionData] = useState<ContributionData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const username = 'danielnine9';

    useEffect(() => {
        fetchGitHubContributions(username)
            .then(data => {
                setContributionData(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error('Error fetching GitHub contributions:', err);
                setError('Could not load GitHub contributions data. Falling back to simulated data.');
                simulateContributionData().then(data => {
                    setContributionData(data);
                    setIsLoading(false);
                });
            });
    }, [username]);

    const fetchGitHubContributions = async (username: string): Promise<ContributionData> => {
        const token = import.meta.env.VITE_GITHUB_TOKEN || '';
        
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
                                    contributionLevel
                                }
                            }
                        }
                    }
                }
            }
        `;

        try {
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

            return transformGitHubData(apiData);
        } catch (error) {
            console.error('Error fetching GitHub contributions:', error);
            throw error;
        }
    };

    const transformGitHubData = (apiData: any): ContributionData => {
        const weeks: ContributionDay[][] = [];
        let totalContributions = 0;

        const calendar = apiData?.data?.user?.contributionsCollection?.contributionCalendar;
        if (!calendar) {
            throw new Error('Invalid GitHub API response structure');
        }

        totalContributions = calendar.totalContributions;

        for (const week of calendar.weeks) {
            const days: ContributionDay[] = [];
            for (const day of week.contributionDays) {
                days.push({
                    date: day.date,
                    count: day.contributionCount,
                    level: day.contributionLevel === 'NONE' ? 0 :
                           day.contributionLevel === 'FIRST_QUARTILE' ? 1 :
                           day.contributionLevel === 'SECOND_QUARTILE' ? 2 :
                           day.contributionLevel === 'THIRD_QUARTILE' ? 3 : 4,
                });
            }
            weeks.push(days);
        }

        return { totalContributions, weeks };
    };

    const simulateContributionData = (): Promise<ContributionData> => {
        return new Promise((resolve) => {
            const now = new Date();
            const oneYearAgo = new Date();
            oneYearAgo.setFullYear(now.getFullYear() - 1);

            const weeks: ContributionDay[][] = [];
            for (let i = 0; i < 53; i++) {
                const days: ContributionDay[] = [];
                for (let j = 0; j < 7; j++) {
                    let level = 0;
                    const isActiveDay = j === 0 || j === 2 || j === 4;
                    const isActiveWeek = (i >= 10 && i <= 15) || (i >= 25 && i <= 30) || (i >= 40 && i <= 48);

                    if (isActiveWeek && isActiveDay) {
                        level = Math.floor(Math.random() * 4) + 1;
                    } else if (Math.random() > 0.8) {
                        level = Math.floor(Math.random() * 3) + 1;
                    }

                    const currentDate = new Date(oneYearAgo);
                    currentDate.setDate(oneYearAgo.getDate() + (i * 7) + j);

                    days.push({
                        date: currentDate.toISOString().split('T')[0],
                        count: level === 0 ? 0 : Math.floor(Math.random() * 10) + 1,
                        level,
                    });
                }
                weeks.push(days);
            }

            const totalContributions = 512;
            resolve({ totalContributions, weeks });
        });
    };

    const getMonthLabels = () => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const now = new Date();
        const labels = [];

        for (let i = 11; i >= 0; i--) {
            const monthIndex = (now.getMonth() - i + 12) % 12;
            labels.push(months[monthIndex]);
        }

        return labels.reverse();
    };

    if (isLoading) {
        return (
            <div className="flex justify-center py-8">
                <div className={`animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 ${
                    darkMode ? 'border-blue-500' : 'border-indigo-500'
                }`}></div>
            </div>
        );
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
        >
            <motion.div
                className={`${
                    darkMode ? 'bg-slate-800/80 border-slate-700/50' : 'bg-white border-gray-200'
                } rounded-xl shadow-lg p-6 border hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}
            >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                        <Github className={`w-6 h-6 ${darkMode ? 'text-blue-500' : 'text-indigo-500'} mr-2`} />
                        <h3 className={`text-xl sm:text-2xl font-semibold ${
                            darkMode ? 'text-blue-300' : 'text-blue-700'
                        }`}>
                            GitHub Contributions
                        </h3>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className={`${
                            darkMode ? 'text-slate-400' : 'text-slate-600'
                        } flex items-center text-sm`}>
                            <Calendar className="w-4 h-4 mr-1" />
                            Last Year
                        </span>
                        <span className={`${
                            darkMode ? 'text-slate-400' : 'text-slate-600'
                        } flex items-center text-sm`}>
                            <Activity className="w-4 h-4 mr-1" />
                            {contributionData?.totalContributions} contributions
                        </span>
                    </div>
                </div>

                {error && (
                    <div className={`mb-4 p-3 ${
                        darkMode ? 'bg-yellow-900/30 text-yellow-200' : 'bg-yellow-100 text-yellow-800'
                    } rounded flex items-start`}>
                        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{error}</p>
                    </div>
                )}

                <div className="overflow-x-auto">
                    <div className="min-w-max">
                        <div className="flex mb-1 pl-10">
                            {getMonthLabels().map((month, i) => (
                                <div key={i} className={`flex-1 text-xs ${
                                    darkMode ? 'text-slate-400' : 'text-gray-500'
                                } text-center`}>
                                    {month}
                                </div>
                            ))}
                        </div>
                        <div className="flex">
                            <div className="pr-2">
                                <div className="h-3 w-10"></div>
                                <div className={`h-3 w-10 text-xs ${
                                    darkMode ? 'text-slate-400' : 'text-gray-500'
                                } text-right`}>Mon</div>
                                <div className="h-3 w-10"></div>
                                <div className={`h-3 w-10 text-xs ${
                                    darkMode ? 'text-slate-400' : 'text-gray-500'
                                } text-right`}>Wed</div>
                                <div className="h-3 w-10"></div>
                                <div className={`h-3 w-10 text-xs ${
                                    darkMode ? 'text-slate-400' : 'text-gray-500'
                                } text-right`}>Fri</div>
                                <div className="h-3 w-10"></div>
                            </div>
                            <div className="flex gap-1">
                                {contributionData?.weeks.map((week, weekIndex) => (
                                    <div key={weekIndex} className="flex flex-col gap-1">
                                        {week.map((day, dayIndex) => (
                                            <ContributionBlock
                                                key={`${weekIndex}-${dayIndex}`}
                                                count={day.count}
                                                date={day.date}
                                                level={day.level}
                                                darkMode={darkMode}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`flex justify-end items-center mt-4 text-xs ${
                            darkMode ? 'text-slate-400' : 'text-gray-500'
                        }`}>
                            <span className="mr-2">Less</span>
                            <div className="flex gap-1">
                                <div className={`w-3 h-3 rounded-sm ${
                                    darkMode ? 'bg-slate-700' : 'bg-gray-200'
                                }`}></div>
                                <div className={`w-3 h-3 rounded-sm ${
                                    darkMode ? 'bg-blue-900' : 'bg-blue-100'
                                }`}></div>
                                <div className={`w-3 h-3 rounded-sm ${
                                    darkMode ? 'bg-blue-800' : 'bg-blue-200'
                                }`}></div>
                                <div className={`w-3 h-3 rounded-sm ${
                                    darkMode ? 'bg-blue-700' : 'bg-blue-300'
                                }`}></div>
                                <div className={`w-3 h-3 rounded-sm ${
                                    darkMode ? 'bg-blue-600' : 'bg-blue-400'
                                }`}></div>
                            </div>
                            <span className="ml-2">More</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 ${
                            darkMode
                                ? 'bg-blue-900/80 hover:bg-blue-900 text-blue-200'
                                : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
                        } rounded-lg transition-colors duration-200`}
                    >
                        <Github className="w-5 h-5 mr-2" />
                        Visit GitHub Profile
                    </motion.a>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default GitHubContributions;