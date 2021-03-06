const value = {
    canonical_source: 'https://github.com/sanskrit-coders/indic_transliteration/blob/master/src/test/resources/dravidianTransliterationTests.json',
    comments: 'Shared transliteration tests for dravidian scripts. In each test, the dev field is compulsory.',
    tests: [
        {
            dev: 'असय औषधिः ग्रन्थः। ऎ ऒ यॆक्ककॊ? शङ्कर',
            telugu: 'అసయ ఔషధిః గ్రన్థః। ఎ ఒ యెక్కకొ? శఙ్కర',
            kannada: 'ಅಸಯ ಔಷಧಿಃ ಗ್ರನ್ಥಃ। ಎ ಒ ಯೆಕ್ಕಕೊ? ಶಙ್ಕರ',
            tamil_failing: 'அஸய ஔஷதிஃ க்ரந்தஃ। எ ஒ யெக்ககொ?',
            optitrans: 'asaya auShadhiH granthaH| e o yekkako? shankara',
            hk: 'asaya auSadhiH granthaH| e o yekkako? zaGkara',
        },
        {
            dev: 'मधुरै मीऩाक्षी कोयिलिल् कल् याऩैक्कु करुम्बु कोडुत्त लीलै',
            hk: 'madhurai mIn2AkSI kOyilil kal yAn2aikku karumbu kODutta lIlai',
            iast: 'madhurai mīṉākṣī koyilil kal yāṉaikku karumbu koḍutta līlai',
        },
    ],
};


export default value;
