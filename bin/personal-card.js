#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

"use strict";
const boxen = require("boxen");
const chalk = require("chalk");
const open = require("open");
const inquirer = require("inquirer");

const WEBSITE = "https://sshyam-gupta.netlify.com";
const EMAIL = "shyamm@outlook.com"

// Define options for Boxen
const boxenOptions = {
  padding: 1,
  borderStyle: "double",
  borderColor: "green"
};

// Text + chalk definitions
const data = {
  name: chalk.white("               Shyam Gupta"),
  handle: chalk.white("sshyam-gupta"),
  work: chalk.white("Senior JavaScript Developer, Mumbai - India"),
  labelWork: chalk.white.bold("      Work:"),

  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("shyamm06"),
  labelTwitter: chalk.white.bold("   Twitter:"),

  instagram: chalk.gray("https://instagram.com/") + chalk.yellow("shyamm06"),
  labelInstagram: chalk.white.bold(" Instagram:"),

  github: chalk.gray("https://github.com/") + chalk.green("sshyam-gupta"),
  labelGitHub: chalk.white.bold("    GitHub:"),

  npm: chalk.gray("https://npmjs.com/") + chalk.red("~shyamm06"),
  labelNpm: chalk.white.bold("       npm:"),

  linkedin:
    chalk.gray("https://linkedin.com/in/") + chalk.blue("shyam-gupta-66463a62"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),

  web: chalk.magenta(WEBSITE),
  labelWeb: chalk.white.bold("       Web:"),

  email: chalk.magenta(EMAIL),
  labelEmail: chalk.white.bold("     Email:"),

  npx:
    chalk.red("npx") +
    " " +
    chalk.white("sshyam-gupta  (via GitHub Package Registry)"),
  labelCard: chalk.white.bold("      Card:")
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const instagraming = `${data.labelInstagram}  ${data.instagram}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const npming = `${data.labelNpm}  ${data.npm}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  twittering +
  newline + // data.labelTwitter + data.twitter
  instagraming +
  newline + // data.labelInstagram + data.instagram
  githubing +
  newline + // data.labelGitHub + data.github
  npming +
  newline + // data.labelnpm + data.npm
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  webing +
  newline +
  newline + // data.labelLinkedIn + data.linkedin
  //  emailing + newline + newline + // data.labelEmail + data.email
  carding; // data.labelCard + data.npx

const card = () => {
  console.log(
    [
      ``,
      boxen(output, boxenOptions),
      ``,
      `Howdy! It's still me, Shyam, but outside that stupid box.`,
      `Now let's gonna make this a bit more interactive, ok?`,
      ``
    ].join(newline)
  );
};

const options = (repeat = false) => {
  if (repeat) {
    console.log(newline);
  }
  inquirer
    .prompt({
      type: "list",
      name: "action",
      message: repeat
        ? `Done, do you want to do something else?`
        : `What you want to do?`,
      choices: [
        {
          name: "Visit my web page? Please please please 🥺",
          value: () => {
            open(WEBSITE);
            options(true);
          }
        },
        {
          name: "Send me an email? (Pretending we are in 2000s)",
          value: () => {
            open(`mailto:${EMAIL}`);
            options(true);
          }
        },
        {
          name: "Just quit.",
          value: () => {
            console.log("\nDone, see you soon.\n");
          }
        }
      ]
    })
    .then(answer => answer.action());
};

card();
options();
