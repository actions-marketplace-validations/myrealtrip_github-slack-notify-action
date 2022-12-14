<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">github-slack-notify-action</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/myrealtrip/github-slack-notify-action)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/myrealtrip/github-slack-notify-action)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">
    <br/>
</p>

## π Table of Contents

- [π Table of Contents](#-table-of-contents)
- [π§ About <a name = "about"></a>](#-about-)
- [π Getting Started <a name = "getting_started"></a>](#-getting-started-)
- [π Usage <a name="usage"></a>](#-usage-)
- [π Deployment <a name = "deployment"></a>](#-deployment-)
- [βοΈ Built Using <a name = "built_using"></a>](#οΈ-built-using-)
- [βοΈ Authors <a name = "authors"></a>](#οΈ-authors-)

## π§ About <a name = "about"></a>

κΉν μ΄λ²€νΈλ₯Ό μ¬λμΌλ‘ λ°μλ³΄κΈ° μν μ‘μμλλ€.

## π Getting Started <a name = "getting_started"></a>

κ°λ° λ° νμ€νΈ λͺ©μ μΌλ‘ λ‘μ»¬μμ νλ‘μ νΈλ₯Ό μ€ννλ λ°©λ²μ μ€λͺν©λλ€. λ°°ν¬νλ λ°©λ²μ λν μμΈν λ΄μ©μ [deployment](#deployment)λ₯Ό μ°Έμ‘° ν΄μ£ΌμΈμ

## π Usage <a name="usage"></a>

λ€μκ³Ό κ°μ κΉν μ‘μμ `.github/workflows` λλ ν λ¦¬μ μμ±ν΄μ£ΌμΈμ.
μ‘μ μ΄λ¦μ μλ ₯ν  λλ νμ¬ λ²μ μ μ λ³΄κ³  `myrealtrip/github-slack-notify-action@{μ΅μ λ²μ }`μ ν¬λ§·μΌλ‘ μλ ₯ν΄μ£ΌμΈμ.

```yaml
name: Sample Action
on: [pull_request, pull_request_review]

jobs:
  create-pr:
    runs-on: ubuntu-latest
    name: Slack Notification
    steps:
      - name: Checkout
        uses: actions/checkout@master
      - name: Fire Notification
        uses: myrealtrip/github-slack-notify-action@latest
        with:
          plane-text: Hello Myrealtrip!
          slack-bot-token: ${{ secrets.SLACK_BOT_TOKEN }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
          channel-id: "my-slack-channel-id"
```

| μ΄λ¦              | μ€λͺ                                                                                     | μ΅μ |
| ----------------- | ---------------------------------------------------------------------------------------- | ---- |
| `slack-bot-token` | λ©μΈμ§λ₯Ό λ³΄λΌ μ¬λλ΄ ν ν°.                                                               | νμ |
| `github-token`    | Github Personal Access Token. `repo` μ€μ½νλ₯Ό μ§μ ν΄μ μμ±ν΄μ£ΌμΈμ                      | νμ |
| `channel-id`      | λΈν°λ₯Ό μκ³  μΆμ μ¬λ μ±λ ID                                                            | μ ν |
| `build-type`      | `design_system_production`, `design_system_canary`, `canary_deploy`, `production_deploy` | μ ν |
| `plane-text`      | build-type κ° μ£Όμ§ μμΌλ©΄ μ¬λ μ±λμ νλ¬Έ λ©μΈμ§ μ μ‘ν©λλ€(λ§ν¬λ€μ΄ μμ± κ°λ₯)         | μ ν |
| `action-owner`    | github username κ°μ μ£Όλ©΄ κΉνλΈ νλ‘ν λͺμ΄ ν¬ν¨ λμ΄ μ μ‘ λ©λλ€.                      | μ ν |

\* `action-owner` κ°μ΄ ν¬ν¨ λμμλ μμ

```
Author: μ κ±΄μ°(Frontend)
νμ€νΈ λ©μΈμ§μλλ€.
```

## π Deployment <a name = "deployment"></a>

- μ΅κ·€λ¬ μ»€λ° κ°μ΄λλ₯Ό λ°λΌ μλ©ν λ²μ λκ³Ό λ§€ν λμ΄ μλμΌλ‘ λ²μ μ΄ μμΉν©λλ€.

  ```json
  [
    {
      "release": "minor",
      "type": "feat"
    },
    {
      "release": "patch",
      "type": "fix"
    },
    {
      "release": "patch",
      "type": "chore"
    },
    {
      "release": "patch",
      "type": "docs"
    },
    {
      "release": "patch",
      "type": "style"
    },
    {
      "release": "patch",
      "type": "refactor"
    },
    {
      "release": "patch",
      "type": "perf"
    },
    {
      "release": "patch",
      "type": "test"
    },
    {
      "release": "minor",
      "type": "build"
    },
    {
      "release": "patch",
      "type": "ci"
    },
    {
      "release": "minor",
      "type": "revert"
    }
  ]
  ```

- master λΈλμΉμ μ΅κ·Ό μ»€λ°μ νμμ λ°λ¦λλ€.
- **yarn build** λ₯Ό ν΅ν΄ **dist** νμΌκ³Ό ν¨κ» μμ€νΈλ¦Όμ νΈμ¬ ν΄μ£ΌμΈμ

  ```bash
  $ yarn build
  ```

- μ΅μ  νκ·Έλ₯Ό λ§μΌ νλ μ΄μ€μ λ±λ‘ ν΄μ£ΌμΈμ

## βοΈ Built Using <a name = "built_using"></a>

- [@actions/core](https://www.npmjs.com/package/@actions/core) - κΉν μ‘μ
- [@actions/github](https://www.npmjs.com/package/@actions/github) - κΉν μ΄λ²€νΈ
- [@slack/web-api](https://www.npmjs.com/package/@slack/web-api) - μ¬λ
- [@vercel/ncc](https://www.npmjs.com/package/@vercel/ncc) - λ²λ€λ¬

## βοΈ Authors <a name = "authors"></a>

- [@myrealtrip](https://github.com/myrealtrip) - Idea & Initial work
