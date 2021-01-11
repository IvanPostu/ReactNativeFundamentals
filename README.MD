

# React Native Fundamentals


## Virtual device

```bash
$ emulator -list-avds
$ emulator -avd avd_name [ {-option [value]} … ]
```

## Real device

```bash
$ adb devices
```

## Debug project

- Install React Native Tools extension
- Execute the following script:
```bash
$ npm run start -- --reset-cache
$ npm run android
$ adb shell input keyevent 82
```
- Set debug ON
- Turn OFF the application on the real or virtual device.
- In the VScode press F5
- Turn ON the application on the real or virtual device.
- Profit :)