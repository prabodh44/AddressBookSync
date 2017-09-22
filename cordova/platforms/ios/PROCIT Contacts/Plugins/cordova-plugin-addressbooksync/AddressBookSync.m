#import "AddressBookSync.h"

#import <Cordova/CDVAvailability.h>

@implementation AddressBookSync

- (void)pluginInitialize {
}

- (void)sync:(CDVInvokedUrlCommand *)command{
    NSLog(@"Process started");
    NSString *filePath = [[NSBundle mainBundle] pathForResource:@"ProcitAddressBookData" ofType:@"json"];
    NSData *data = [NSData dataWithContentsOfFile:filePath];
    NSMutableDictionary *jsonData = [NSMutableDictionary dictionaryWithDictionary:[NSJSONSerialization JSONObjectWithData:data options:kNilOptions error:nil]];
    NSMutableDictionary *driveDetails = [NSMutableDictionary dictionaryWithDictionary:[jsonData objectForKey:@"driveDetails"]];
    //NSLog(@"drive details: %@", driveDetails);
    NSMutableDictionary *fileContent = [NSMutableDictionary dictionaryWithDictionary:[driveDetails objectForKey:@"fileContent"]];
    NSMutableArray *contacts = [NSMutableArray arrayWithArray:[fileContent objectForKey:@"contacts"]];
    for(int i = 0; i < [contacts count]; i++){
        NSMutableDictionary *mutDict = [NSMutableDictionary dictionaryWithDictionary:[contacts objectAtIndex:i]];
        [mutDict setObject:[NSString stringWithFormat:@"%d", i + 1] forKey:@"id"];
        contacts[i] = mutDict;
    }
    [fileContent setObject:contacts forKey:@"contacts"];
    [driveDetails setObject:fileContent forKey:@"fileContent"];
    [jsonData setObject:driveDetails forKey:@"driveDetails"];
    
    
    
    

    //NSString *jsonString = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    //NSLog(@"Json String %@", jsonString);
    
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:jsonData];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
    NSLog(@"Everything done");
}

@end
