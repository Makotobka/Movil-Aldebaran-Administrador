import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ErrorHandler, NgModule } from '@angular/core';
import { Screenshot } from '@ionic-native/screenshot';
import { Base64 } from '@ionic-native/base64';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file'
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';
import { InAppBrowser } from '@ionic-native/in-app-browser';

export const proveedores = [
    StatusBar,
    FilePath,
    SplashScreen,
    Screenshot,
    Base64,
    PhotoViewer,
    File,
    FileTransfer,
    FileTransferObject,    
    FileOpener,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
]