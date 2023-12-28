const path = require('path')

module.exports = {
  packagerConfig: {
    asar: true,
    icon: path.resolve(__dirname, 'src', 'assets', 'icons', 'icon'),
    name: 'Conductor',
    executableName: 'Conductor',
    authors: 'Foundation 0'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      platforms: ['win32'],
      config: (arch) => ({
        name: 'Conductor',
        authors: 'Foundation 0',
        noMsi: true,
        setupExe: `conductor-${version}-win32-${arch}-setup.exe`,
        setupIcon: path.resolve(__dirname, 'src', 'assets', 'icons', 'icon.ico'),
        // signWithParams: `/sha1 ${process.env.CERT_FINGERPRINT} /tr http://timestamp.digicert.com /td SHA256 /fd SHA256`,
      }),
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'foundation0',
          name: 'conductor-app'
        },
        prerelease: true
      }
    }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
