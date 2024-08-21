# Telegram Mini App

This project is a Telegram Mini App built with React using the `@telegram-apps/sdk-react` library. Below is a guide to help you get started with preparation, development, and deployment.

## 1. Preparation

### Creating a Telegram App

Before starting development, you need to create a Telegram app. Follow these steps:

1. Go to the [Telegram Mini Apps documentation on creating a new app](https://docs.telegram-mini-apps.com/platform/creating-new-app).
2. Register your app using [BotFather](https://t.me/BotFather), where you will get an API token and set basic settings such as the app name and description.

### Preparing the Telegram Test Environment

To test your app during development:

1. Obtain a test environment link by following the instructions [here](https://docs.telegram-mini-apps.com/platform/getting-app-link).
2. Use this link to launch your app in the test environment and make sure it is connected correctly.

## 2. Development

### Setting Up the Development Environment

1. Clone the repository to your local machine.
2. Install dependencies by running:

   ```bash
   yarn
   ```

3. Start the development server by running:

   ```bash
   yarn dev
   ```

4. The development server runs on port `5432`. Use `ngrok` to expose this local server to the internet:

   ```bash
   ngrok http 5432
   ```

5. Copy the `ngrok` URL and set it as the app URL using [BotFather](https://t.me/BotFather).

6. Launch the app using the test link from the Telegram test environment.

## 3. Deployment

### Finalizing and Deploying the App

1. Before deployment, ensure that you have updated the following in the `manifest` file:

   - `url` (set this to the final deployed URL)
   - `name`
   - `icon`

2. Build the app for production:

   ```bash
   yarn build
   ```

3. Serve the `dist` folder on your production server.

4. Update the app URL with BotFather to point to the deployed URL

5. Your Telegram Mini App is now live! The app link can be found in the app's settings with this format: `https://t.me/{mybot}/{myapp}`.
