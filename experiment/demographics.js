// Consent Form =================================================================
var demographics_debriefing = {
    type: jsPsychSurvey,
    survey_json: function() {
        let text =
        "<img src='https://RoisinSharma.github.io/SLSTraitBattery/images/logo.jpg' width='300px' align='right'/><br><br><br><br><br>" +
        "<h1>Debriefing</h1>"
        text +=
            "<h4>Thank you for completing this section of the experiment!</h4>" +
            "<p align='left'> The purpose of this section is to gather information on your perceptual experiences. <br>" +
            "You completed the Phenomenological Control Scale, an interactive task designed to measure your ability to generate experiences to meet expectancies. <br>" +
            "You also completed the Plymouth Sensory Imagery Questionnaire which is designed to capture multi-sensory mental imagery. <br>" +
            "If you would like to be sent a copy of the papers explaining these scales, please contact Róisín (<a href='mailto:RS843@sussex.ac.uk'>RS843@sussex.ac.uk</a>). " +
            "<br> Please feel free to recommend this study to others, especially if you know any grapheme-colour synesthetes!</p>" +
                    
            "<p align='left'><b>Thank you again!</b> Your participation in this study will be kept completely confidential. If you have any questions or concerns about the project, please contact Dr David Schwartzman (<i style='color:DodgerBlue;'>D.Schwartzman@sussex.ac.uk</i>)</p>" +
            "<p align='center' style='color: black; font-size: 30px;'><b>To complete your participation in this study, click on 'Complete the experiment + Save data' and wait until your responses have been successfully saved before closing the tab. If you do not wish for your data to be saved, please close the tab now.</b></p>"
        return {
            showQuestionNumbers: false,
            completeText: "Complete the experiment + Save data",
            pages: [
                {
                    elements: [
                        {
                            type: "html",
                            name: "demographics_debriefing",
                            html: text,
                        },
                    ],
                },
            ],
        }
    },
}

var ConsentForm = {
    type: jsPsychSurvey,
    survey_json: function () {
        // Get URL variables
        let urlvars = jsPsych.data.urlVariables()

        // Logo and title
        let text =
            "<img src='https://RoisinSharma.github.io/SLSTraitBattery/images/logo.jpg' width='300px' align='right'/><br><br><br><br><br>" +
            "<h1>Informed Consent</h1>"

        // Main Text
        text +=
            // Overview
            "<h4>Invitation to Take Part</h4>" +
            "You are being invited to take part in a research study to further our understanding of individual differences in perceptual experiences. " +
            "Thank you for carefully reading this information sheet. " +
            "This study is being conducted by student researcher Róisín Sharma, and project supervisor Dr David Schwartzman from the Sussex Center for Consciousness Science, University of Sussex (see contact information below). " +
            "This study needs to be completed on a computer/laptop to ensure all elements of the task appear correctly. If at any point you wish to stop participating and withdraw your data, please close the tab. This will prevent your data from being saved." +
            // Description
            "<h4>What is the purpose of the study?</h4>" +
            "This study will compare stroboscopic hallucinations in people with grapheme-colour synesthesia to people without synesthesia. " +
            "Synesthesia is a condition where stimulation of one sensory or cognitive pathway leads to automatic, involuntary experiences in a second sensory or cognitive pathway. People with grapheme-colour synesthesia experience specific colours when viewing letters and/or numbers. " +

            "<h4>What does this study entail?</h4>" +
            "Prior to the main experiment, you will complete an interactive task and a questionnaire online to measure sensory imagery and experiences (~XX minutes). " +
            "We will also ask you to complete an online task to verify if you are a grapheme-colour synesthete or not. "+
            "You will then complete the in-person component of this study at the University of Sussex (~XX minutes), where we will apply gentle magnetic pulses to your brain via transcranial magnetic stimulation (TMS). " +
            "TMS applies a soft magnetic pulse into the brain via an electronically controlled magnetic coil, causing neurons in the designated area to activate. "+
            "We will then run trials using stroboscopic light stimulation, in which you will look at a strobe lamp through goggles, which causes altered perceptual experiences, such as seeing geometric patterns. "+
            "A short recorded interview and two questionnaires will follow each strobe session. " +
            
            // this online component
            "<h4>This section</h4>" +
            "<p>In this online component, you will complete two tasks: " +
            "<ul style='padding-left: 30px;'>" +
            "<li>An interactive task to measure sensory experiences.</li>" +
            "<li>A questionnaire about mental imagery.</li>" +
            "</ul></p>" +
            //Task description
            "Please find a comfortable position in front of the computer making sure you are at a sufficient distance to hold your hands in front of you without touching anything.</p>" +
            "This online component will take you <b style='color:#FE6237;'>~60 minutes</b> to complete. Please make sure you are in a quiet environment, using <b>headphones</b> throughout and that you have time to complete it in one go." +
            
            //Note
            "Your participation is completely <b>voluntary</b>. You are free to <b style='color:#4B0FD6;'>close the webpage at any time</b> if you do not wish to continue. Your data will not be saved if you do so. " +
            "Please be assured that all information you provide will remain <b>completely anonymous</b>.</p>" +
            // Risks
            "<h4>What are the possible benefits of taking part?</h4>" +
            "To compensate you for your time and effort, you will receive either X SONA credits per hour or XX GBP per hour. Travel expenses will not be covered. " +
            "Additionally, the knowledge gained from this study may inform research on the diversity and underlying mechanisms of perceptual experiences. " +
            "Although there is no direct benefit for you, in participating in the study you will know that you have made a valuable contribution to these objectives. " +
            "As stated above, you can <b style='color:#4B0FD6;'>withdraw from the study at any time</b> by closing the tab (your data will <b>not</b> be saved).</p> " +
           
           "<h4>Are there any risks in taking part?</h4>" +
            "The TMS may induce brief tingling or a mild headache afterward, which are short-lived and manageable with rest or simple pain relief. "+
            " In rare cases, the strobe may cause a seizure. The chance of serious side effects is extremely low, as high-risk participants are excluded via our pre-screening procedures and all experimenters are first-aid trained. " +
            " If you feel that answering any of these questions will negatively impact your wellbeing or cause significant lasting distress, it is important to not take part in this study." +

            // Results and personal information
            "<h4>What will happen to the results and my personal information?</h4>" +
            "The results of this research will be included in a preregistered publication. In addition, this data will be used for other studies and the anonymised data will be made publicly available. If you wish to be notified once this is available, please contact Dr David Schwartzman (<i style='color:DodgerBlue;'>D.Schwartzman@sussex.ac.uk</i>). Your anonymity will be ensured in the way described in the consent information below. If you wish to take part, please acknowledge that you have fully understood this sheet, and that you consent to take part in the study as it is described here.</p>" +
            "<h3><p align='left'><b>Consent</b><br></p></h3>" +
            // Bullet points
            "<li align='left'>I agree to take part in the University of Sussex research project described in the information page. I have read and understood the Explanatory Statement, which will be sent to me by email for my records. I also understand that I am free to withdraw my data by xxxx, 2 weeks after the experiment, as completed by emailing one of the researchers (Dr. David Schwartzman: (<i style='color:DodgerBlue;'>D.Schwartzman@sussex.ac.uk</i>) or Róisín Sharma: (<i style='color:DodgerBlue;'>RS843@sussex.ac.uk</i>). </li>" +
            "<li align='left'>I understand that any information I provide is confidential, and that no information that I disclose will lead to the identification of any individual in the reports on the project, either by the researcher or by any other party. </li>" +
            "<li align='left'>I understand that any audio recordings taken will be transcribed and any identifying data removed before any further processing. All audio recordings will be deleted once they have been transcribed. </li>" +
            "<li align='left'>I understand that my participation is voluntary, that I can choose not to participate in part or all of the project, and that I can withdraw at any stage of the project without being penalised or disadvantaged in any way.</li>" +
            "<li align='left'>I understand that my personal data will be used for the purposes of this research study and will be handled in accordance with Data Protection legislation. I understand that the University's Private Notice provided further information on how the University uses personal data in its research. </li>" +
            "<li align='left'>I understand that my data will be stored with my name until xxxx; afterwards, my data will be stored in an unidentifiable way (e.g., using ID numbers, not names). If I indicate that I want to be contacted for a future study at the end of this study, my email address will be stored separately from all other data collected. Electronic data will be stored securely on a University-managed system. </li>" +
            "<li align='left'>I understand that my anonymised research data will be retained indefinitely.  </li>" +
            "<li align='left'>I understand that such information will be treated as strictly confidential and handled in accordance with the Data Protection Act 2018.  </li>" +
            "<li align='left'>I confirm I have no history of seizures or migraines.</li>" // Added </li> and +

        // End
        text +=
            "<li align='left'>By participating, you agree to follow the instructions and provide honest answers. If you do not wish to participate or if you don't have the time, simply close your browser.</li></p>" +
            "<p align='left'><br><sub><sup>For further information about this research, or if you have any concerns, please contact Dr David Schwartzman (<i style='color:DodgerBlue;'>D.Schwartzman@sussex.ac.uk</i>) This research has been approved (ER/....) by the Sciences & Technology Cross-Schools Research Ethics Committee (C-REC) (<i style='color:DodgerBlue;'>crecscitec@sussex.ac.uk</i>). The University of Sussex has insurance in place to cover its legal liabilities in respect of this study.</sup></sub></p>"

        // Return Survey
        return {
            showQuestionNumbers: false,
            completeText: "I read, understood, and I consent",
            pages: [
                {
                    elements: [
                        {
                            type: "html",
                            name: "ConsentForm",
                            html: text,
                        },
                    ],
                },
            ],
        }
    },
}

var demographic_questions = {
    type: jsPsychSurvey,
    survey_json: function(){
        return {
            title: "About yourself",
            completeText: "Continue",
            goNextPageAutomatic: false,
            showQuestionNumbers: false,
            pages: [
                {
                    elements: [
                        {
                            type: "radiogroup", // Added this
                            title: "What is your sex?",
                            name: "Sex",
                            choices: ["Male", "Female", "Other"],
                            isRequired: true,
                            colCount: 0,
                        },
                        {
                            type: "text", // Added this
                            title: "What is your age?",
                            name: "Age",
                            isRequired: true,
                            inputType: "number",
                            min: 18,
                            max: 45,
                            placeholder: "e.g., 25",
                        },
                    ],
                },
            ],
        }
    },
    data: {
        screen: "demographic_questions",
    },    
}

var demographics_browser_info = {
    type: jsPsychBrowserCheck,
    data: {
        screen: "browser_info",
        date: new Date().toLocaleDateString("en-GB"),
        time: new Date().toLocaleTimeString("en-GB"),
    },
    on_finish: function (data) {
        data["participantID"] = typeof participantID !== 'undefined' ? participantID : "unknown";

        // Rename
        var dat = jsPsych.data.get().filter({ screen: "browser_info" }).values()[0]
        data["screen_height"] = dat["height"]
        data["screen_width"] = dat["width"]

        // Add URL variables - ?sona_id=x&exp=1
        let urlvars = jsPsych.data.urlVariables()
        data["researcher"] = urlvars["exp"]
    },
}

// Demographic questions

// Debrief, Thank you Screen

