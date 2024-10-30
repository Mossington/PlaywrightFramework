### GIT Commands - Quick access

<br>

#### Link to GIT cheatsheet

https://education.github.com/git-cheat-sheet-education.pdf

<br>

##### SETUP

Configuring user information used across all local repositories

<br>

set a name that is identifiable for credit when review version history

- git config --global user.name “[firstname lastname]”

set an email address that will be associated with each history marker

- git config --global user.email “[valid-email]”

<br>

##### Cloning a Repo

retrieve an entire repository from a hosted location via URL

- git clone [url]

<br>

##### STAGE & SNAPSHOT

Working with snapshots and the Git staging area

<br>

show modified files in working directory, staged for your next commit

- git status

add a file as it looks now to your next commit (stage)

- git add [file]

commit your staged content as a new commit snapshot

- git commit -m “[descriptive message]”

<br>

### BRANCH & MERGE

Isolating work in branches, changing context, and integrating changes

list your branches. a \* will appear next to the currently active branch

- git branch

List all remote branches

- git branch -r

create a new branch at the current commit

- git branch [branch-name]

switch to another branch and check it out into your working directory

- git checkout

merge the specified branch’s history into the current one

- git merge [branch]

show all commits in the current branch’s history

- git log

<br>

### SHARE & UPDATE

Retrieving updates from another repository and updating local repos

add a git URL as an alias

- git remote add [alias] [url]

fetch down all the branches from that Git remote

- git fetch [alias]

merge a remote branch into your current branch to bring it up to date

- git merge [alias]/[branch]

Transmit local branch commits to the remote repository branch

- git push [alias] [branch]

fetch and merge any commits from the tracking remote branch

- git pull

<br>

### Process for pushing local branch changes to the remove branch

To add files changes for commit, use the following command.

- git add .

then, make a local commit by

- git commit -m "Add in commit comments"

once you make your local commit, you can then push it to your remote GitHub fork.

- git push
