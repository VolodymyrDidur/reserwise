## Git conventions

1. Every branch (excluding rare cases & some tech things) must follow next pattern `prefix/{featureName}`
   Available prefixes:
   - feature (stands for any product story/task/subtask implementation)
   - bugfix
   - tech (tech debts, refactorings, technical improvements)
2. Every commit inside PR should contain explanatory message that describes work done inside every particular commit
3. Squash commit should follow same pattern as branch name (squash is required action)

### Code review

1. Each PR should be assigned to somebody who has the best understanding of particular flow
2. Each PR could be merged only if it has `>= 1` approve
3. Comments and discussions inside PR must be resolved by reporter

---

## Git Branches

### Ongoing work

Pull Requests to `master` branch should be merged using "Squash and merge".

### Illustration 🤩

The following diagram illustrates branching approach

```mermaid
%%{
  init: {
    "theme": "base",
    "gitGraph": {
      "mainBranchName": "master",
      "showBranches": true,
      "showCommitLabel": false
    }
  }
}%%
gitGraph
  commit
  branch feature/ABC-1-feature-one order: 20
  commit
  commit
  checkout master
  branch feature/ABC-2-feature-two order: 21
  checkout master
  merge feature/ABC-1-feature-one tag: "v1.0"
  checkout feature/ABC-2-feature-two
  commit
  checkout master
  merge feature/ABC-2-feature-two tag: "v2.0"
  branch bugfix/ABC-3-some-fix order: 22
  commit
  commit
  checkout master
  merge bugfix/ABC-3-some-fix tag: "v3.0"
  branch feature/ABC-4-feature-three order: 23
  commit
  checkout master
  branch hotfix/v3.0 order: 1
  checkout feature/ABC-4-feature-three
  commit
  checkout master
  merge feature/ABC-4-feature-three tag: "v4.0"
  checkout hotfix/v3.0
  commit tag: "v3.1"
  commit tag: "v3.2"
  checkout master
  merge hotfix/v3.0 tag: "v5.0"


```
