import * as core from "@actions/core";
import * as github from "@actions/github";
import {
  sendCanaryPublishMessage,
  sendPlaneTextMessage,
  sendProductionPublishMessage,
} from "./utils/slack";
import { parseGithubEvent } from "./utils/github/events";
import { ActionEventName } from "./models/github";
import { ACTION_OWNER, PLANE_TEXT } from "./utils/input";

const { eventName, payload } = github.context;

async function main() {
  core.info("π₯ Run.....");
  core.info(`eventName = ${eventName}`);
  core.info("π₯ π₯ π₯ π₯ π₯");
  core.info(`action = ${payload.action}`);
  core.info("π₯ π₯ π₯ π₯ π₯");
  core.info(ACTION_OWNER);

  const githubEvent = parseGithubEvent();
  const planeText = PLANE_TEXT;

  if (!githubEvent) {
    core.info("π νμμ΄ μμ΅λλ€.");
    return;
  }

  switch (githubEvent.type) {
    case ActionEventName.μΉ΄λλ¦¬λ°°ν¬: {
      core.info("μΉ΄λλ¦¬ λ°°ν¬κ° λμμ΅λλ€, μ¬λ λ©μΈμ§λ₯Ό λ³΄λλλ€.");
      await sendCanaryPublishMessage(planeText);
      break;
    }
    case ActionEventName.μ΄μλ°°ν¬: {
      core.info("μ΄μ λ°°ν¬κ° λμμ΅λλ€, μ¬λ λ©μΈμ§λ₯Ό λ³΄λλλ€.");
      await sendProductionPublishMessage(planeText);
      break;
    }
    case ActionEventName.PRμΉμΈ: {
      core.info("Pull Request μΉμΈμ΄ κ°μ§λμμ΅λλ€. μ¬λ λ©μΈμ§λ₯Ό λ³΄λλλ€.");
      // await sendCanaryPublishMessage({ pullRequest });
      break;
    }
    case ActionEventName.μλ ₯: {
      core.info("μ‘μμμ μλ ₯ κ°μ λ°μμ΅λλ€.");
      await sendPlaneTextMessage({ planeText });
      break;
    }
  }

  core.info("π Done!");
}

try {
  main();
} catch (error: any) {
  core.setFailed(error);
}
