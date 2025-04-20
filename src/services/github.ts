const GITHUB_API = 'https://api.github.com';
const USERNAME = 'DanielNine9';

export const fetchGithubUser = async () => {
  try {
    const response = await fetch(`${GITHUB_API}/users/${USERNAME}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
};

export const fetchRepositories = async () => {
  try {
    const response = await fetch(`${GITHUB_API}/users/${USERNAME}/repos?sort=updated&per_page=100`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return null;
  }
};