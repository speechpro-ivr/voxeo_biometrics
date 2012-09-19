[![image](http://speechpro.github.com/voxeo_biometrics/img/voicekey.png)](http://speechpro-usa.com/product/voice_authentication/voicekey)

Voxeo Integration Example
================
[VoiceKey](http://speechpro-usa.com/product/voice_authentication/voicekey), speaker recognition platform, is a unique fusion of text-dependent and text-independent voice biometrics deliverables with a flexible application platform. With over 20 years of experience in law enforcement and commercial voice biometrics SpeechPro technologies provide customers with reliable, state of the art solutions. Voice authentication VoiceKey will enhance customer experience while strengthening corporate security. VoiceKey is a valuable solution for any company whose customers require secure communication with call center agents or IVRs.

Information about VoiceKey API is provided in **VoiceKey Simplified API User Guide**.

Application Description
------
Every registered VoiceKey is identified by `CardID`. Call flow is based on the following scenario:

1. User is identified by CallerID. There should by a place to store the correspondent `CardID`.
2. If `CardID` is found user proceeds to verification, otherwise enrollment is performed.

### 1. Identification
User is identified by `session.connection.remote.uri`. HTTP request to some storage API is performed in the form `check_registration`. If user is found, API returns `CardID` identifier for further use. 

### 2. Enrollment
If user is not found, enrollment process is launched (form named `enroll`). VoiceKey requires user to repeat his passphrase three times. After that HTTP POST VoiceKey API command `Enroll` is performed:

    <data name="enrollRequest" srcexpr="enrollApiUri" method="post" 
    fetchtimeout="10s" namelist="r1 r2 r3" enctype="multipart/form-data"/>
    
where `r1`,`r2` and `r3` are recorded files.

VoiceKey API returns XML that is checked for `Status == 'OK'`. If true, `CardID` is extracted from the response. `CardID` is passed to the storage.

### 3. Verification
Verification (form named `verify`) requires recorded wav and `CardID` to compare with. HTTP POST VoiceKey API command `EnrollVerify` request is performed:

	<data name="verifyRequest" srcexpr="verifyApiUri" method="post" 
	namelist="ID r1" enctype="multipart/form-data" fetchtimeout="10s"/>
	
VoiceKey API returns XML that is checked for `Status == 'OK'`. If true, verification score `VoiceKeyScore` is extracted from the response. Scores more than 70% are considered as the successful verification.

	
	
	