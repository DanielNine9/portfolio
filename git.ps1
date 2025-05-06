# git.ps1

# Configure Git global user
git config --global user.name "DanielNine9"
git config --global user.email "dinhhuyfpt09@gmail.com"

# Get repository and branch from environment variables or use defaults
$repository = if ($env:GITHUB_REPOSITORY) { $env:GITHUB_REPOSITORY } else { "DanielNine9/portfolio" }
$branch = if ($env:GITHUB_REF_NAME) { $env:GITHUB_REF_NAME } else { "master" }

# Set remote URL with token
$repoUrl = "git@github.com:DanielNine9/portfolio.git"
git remote set-url origin $repoUrl

# Ensure on the correct branch
Write-Output "Switching to branch '$branch'..."
git fetch origin
git checkout $branch
if ($LASTEXITCODE -ne 0) {
    Write-Error "Error: Could not switch to branch '$branch'"
    exit 1
}

# Add all changes
Write-Output "Staging changes..."
git add -A

# Commit changes
$commitMessage = "Auto-commit from PowerShell script at $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
Write-Output "Committing changes..."
git commit -m "$commitMessage"
if ($LASTEXITCODE -ne 0) {
    Write-Warning "No changes to commit."
}

# Push to remote
Write-Output "Pushing to '$branch'..."
git push origin $branch
if ($LASTEXITCODE -eq 0) {
    Write-Output "Push successful!"
} else {
    Write-Error "Error: Push failed with exit code $LASTEXITCODE"
    exit 1
}
