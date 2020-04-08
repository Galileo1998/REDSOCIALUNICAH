import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyDCdGLjfUxMSEORgNcdVSgU4Ohgi7K7VmE',
    authDomain: 'misocialunicah.firebaseapp.com',
    databaseURL: 'https://misocialunicah.firebaseio.com',
    projectId: 'misocialunicah',
    storageBucket: 'misocialunicah.appspot.com',
    messagingSenderId: '739498916054',
    appId: '1:739498916054:web:d397973d6c67530fc43177'
  },
  settings: {
    enabledOAuthLogin: true,
    enabledOffline: true,
    appName: 'UC-Social',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.Spanish,
    logoUnicah: 'https://firebasestorage.googleapis.com/v0/b/misocialunicah.appspot.com/o/LOGO_2C1.png?alt=media&token=93e6bd3a-e99e-4518-8738-69673428ccd5'
  },
  theme: {
    primaryColor: '#fff',
    secondaryColor: '#002A80',
    tercia: '#fff'
  }
}
