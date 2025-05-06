if (-not $env:GITHUB_TOKEN) {
    Write-Error "Lỗi: GITHUB_TOKEN không được thiết lập. Vui lòng cung cấp token trong biến môi trường."
    exit 1
}

git config user.name "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"

$repoUrl = "https://x-access-token:$env:GITHUB_TOKEN@github.com/DanielNine9/portfolio.git"
git remote set-url origin $repoUrl

$branchExists = git rev-parse --verify gh-pages
if (-not $branchExists) {
    Write-Output "Branch gh-pages không tồn tại. Tạo branch mới..."
    git checkout --orphan gh-pages
    git commit --allow-empty -m "Initial gh-pages commit"
}

Write-Output "Đang push lên gh-pages..."
git push origin gh-pages

if ($LASTEXITCODE -eq 0) {
    Write-Output "Push thành công!"
} else {
    Write-Error "Lỗi: Push thất bại với mã lỗi $LASTEXITCODE"
    exit 1
}