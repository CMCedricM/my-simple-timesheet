## Summary

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

This project is my first step into mobile development, where I built a basic timesheet application. Users can securely log in and out using Supabase Auth. The app synchronizes and stores clock-in and clock-out history in a Supabase PostgreSQL database, providing a simple yet effective way to manage time tracking.

## Screenshots

![loginPage](screenshots/login.png)

![signupPage](screenshots/signup.png)

![dashboardEmpty](screenshots/EmptyDashboard.png)

![dashboardFilled](screenshots/dashboardLogs.png)

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.
