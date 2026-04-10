// 11D-ASC=================================================================================================================================================================
const asc_instructions = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        completeText: "Start",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "asc_instructions",
                        html:`
                        <div class="narrow-text" style="max-width: 900px; margin: 0 auto; text-align: left;">
                <h2> Altered State of Consciousness</h2>
                <p>On the following pages, you will find a series of statements and, below them, a line with the endpoints “NO, no more than usual” and “YES, much more than usual.” The line is a scale (0-100%) designed to measure the deviation from your usual, everyday waking state. </p>
                <p>Please note that your usual, everyday waking state corresponds to the line on the far left (0% on the scale).</p>
                <p><b>Please now assess the extent to which your state and feelings deviated from your usual, everyday experience from the beginning to the end of your session.</b></p>
                </div>`,
                    },
                ],
            },
        ],
    },
    data: {
        screen: "asc_instructions",
    },
}

// Convernience function to shuffle an object (used internally)
function shuffleObject(obj) {
    const entries = Object.entries(obj)
    for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[entries[i], entries[j]] = [entries[j], entries[i]]
    }
    return Object.fromEntries(entries)
}
const items_asc = {
    asc1: "I felt like a puppet or marionette.",
    asc2: "I had the feeling of being connected to a higher power.",
    asc3: "I experienced boundless joy.",
    asc4: "I saw regular patterns in complete darkness or with closed eyes.",
    asc5: "Everything seemed to unify into oneness.",
    asc6: "Sounds seemed to influence what I saw.",
    asc7: "I saw colors before me in total darkness or with closed eyes.",
    asc8: "The shapes of things seemed to be changed by sounds or noises.",
    asc9: "I felt bodiless.",
    asc10: "I was unable to make even the smallest decision.",
    asc11: "Some everyday things gained a special meaning.",
    asc12: "Things around me had a new, unfamiliar meaning for me.",
    asc13: "I was afraid I wouldn't be able to get out of the state I was in.",
    asc14: "I saw brightness or flashes of light in total darkness or with closed eyes.",
    asc15: "I felt at one with my surroundings.",
    asc16: "I had difficulties in distinguishing important from unimportant things.",
    asc17: "I saw entire scenes in total darkness or with my eyes closed.",
    asc18: "I sensed a touch of eternity.",
    asc19: "Opposites and contradictions seemed to dissolve.",
    asc20: "I was afraid without being able to say exactly why.",
    asc21: "I experienced everything as frighteningly distorted.",
    asc22: "I experienced my surroundings as strange and unsettling. ",
    asc23: "I felt as if I were paralyzed.",
    asc24: "I felt like I was in a particularly profound state.",
    asc25: "I experienced past, present and future as one.",
    asc26: "Objects around me engaged me emotionally much more than usual.",
    asc27: "I felt threatened.",
    asc28: "I had the feeling of being outside of my body.",
    asc29: "I felt as though I were floating.",
    asc30: "I felt isolated from everything and everyone.",
    asc31: "My thoughts kept breaking off; I could not think anything through to the end.",
    asc32: "I gained insights into connections that had previously puzzled me.",
    asc33: "I could see images from my memory or imagination with extreme clarity.",
    asc34: "The colors of things seemed to be changed by sounds or noises.",
    asc35: "I had particularly original thoughts.",
    asc36: "I had the feeling that I no longer had a will of my own.",
    asc37: "I experienced a feeling of awe.",
    asc38: "My imagination was extremely vivid.",
    asc39: "I experienced profound inner peace.",
    asc40: "I had the feeling that something terrible was going to happen.",
    asc41: "I experienced an all-embracing love.",
    asc42: "My experience was religious in nature.",
}
// shuffle once
const shuffled_items = shuffleObject(items_asc)

// build ALL questions into one array
let elements_asc = []

// optional intro text (only once at top)
elements_asc.push({
    type: "html",
    html: "Think back to your strobe session.",
})

// add all slider questions
for (const key of Object.keys(shuffled_items)) {
    elements_asc.push({
        type: "slider",
        name: key,
        title: shuffled_items[key],
        isRequired: true,
        min: 0,
        max: 100,
        step: 1,
        customLabels: [
            { value: 0, text: "NO, no more than usual" },
            { value: 100, text: "YES, much more than usual" },
        ],
        //defaultValueExpression: "50",
    })
}

// single trial
var asc = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        showNavigationButtons: true,
        completeText: "Submit",
        title: "Altered State of Consciousness",
        pages: [
            {
                elements: elements_asc,
            },
        ],
    },
    data: {
        screen: "asc",
    },
}

// 6D-VHQ=================================================================================================================================================================

const vhq_instructions = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        completeText: "Next",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "vhq_instructions",
                        html:`
                        <div class="narrow-text" style="max-width: 900px; margin: 0 auto; text-align: left;">
                <h2> Visual Experience Quesstionnaire</h2>
                <p>Please read through these instructions carefully. </p>
                <p>In this questionnaire, you will be prompted to answer a series of questions about what you saw, which is called your “visual experience”. </p>
                <p>There will be 21 randomly ordered questions which you can answer on a scale from 1 to 5 where 1 means “no, not at all” and 5 means “yes, very much so”.</p>
                <p>Here is an example question:</p>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/smilingquestion.jpg' alt='Example question' style='width: 300px; margin: 10px;'>
                
                <br><br><p>You would answer 5 “yes, very much so\" if you saw something like one of these images during your visual experience, which do have smiling faces:</p>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/face_smiling.png' alt='Example image 1' style='width: 300px; margin: 10px;'>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/fruit_smiling.png' alt='Example image 2' style='width: 300px; margin: 10px;'>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/smily_smiling.png' alt='Example image 3' style='width: 300px; margin: 10px;'>
                
                <br><br><p>Sometimes, the questions will not describe your experience at all, or even seem totally irrelevant to what you saw. In this case, you should answer 1 “no, not at all\".</p>
                <p>For example:</p>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/face_not_smiling.png' alt='Example image 1' style='width: 300px; margin: 10px;'>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/solid.jpg' alt='Example image 2' style='width: 300px; margin: 10px;'>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/fruit_not.png' alt='Example image 3' style='width: 300px; margin: 10px;'>

                <br><br><p>Other times, the questions will partially describe what you saw, but not perfectly. In this case, you should answer somewhere in between, such as 2, 3 or 4.</p>
                <p>For example:</p>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/face_kinda_smiling.png' alt='Example image 1' style='width: 300px; margin: 10px;'>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/smiley_kinda.png' alt='Example image 2' style='width: 300px; margin: 10px;'>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/DALL·E+2023-12-22+12.57.png' alt='Example image 3' style='width: 300px; margin: 10px;'>

                <br><br><p>Some questions will ask you if you saw something from a list of possibilities.</p>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/coloursquestion.jpg' alt='Example image 1' style='width: 300px; margin: 10px;'>
                <p>For these questions, you should answer “yes” if you saw any of these items, even if it was only some or one of them.</p>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/PURPLE.jpg' alt='Example image 1' style='width: 300px; margin: 10px;'>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/RED.jpg' alt='Example image 2' style='width: 300px; margin: 10px;'>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/pexels-yelena-odintsova-19725808+(1).jpg' alt='Example image 3' style='width: 300px; margin: 10px;'>

                <p>You would answer “no” if you saw none of these elements.</p>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/ORANGE2.jpg' alt='Example image 1' style='width: 300px; margin: 10px;'>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/GREY.jpg' alt='Example image 2' style='width: 300px; margin: 10px;'>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/ORANGE.jpg' alt='Example image 3' style='width: 300px; margin: 10px;'>

                <br><br><p>Finally, make sure to answer about what you literally saw, not how you might interpret what you saw.</p>
                <p>If you saw this image, you might be inclined to say that you saw a house with a face on it:</p>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/House1.jpg' alt='Example image 1' style='width: 300px; margin: 10px;'>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/House2.jpg' alt='Example image 2' style='width: 300px; margin: 10px;'>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/House3.jpg' alt='Example image 3' style='width: 300px; margin: 10px;'>
                <p>However, in that context you should simply say you saw a house, as there are no actual faces in that image! Here is what a house with a face on it would mean:</p>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/House4.jpg' alt='Example image 1' style='width: 300px; margin: 10px;'>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/House5.jpg' alt='Example image 2' style='width: 300px; margin: 10px;'>
                <img src='https://RoisinSharma.github.io/SLSTraitBattery/experiment/House6.jpg' alt='Example image 3' style='width: 300px; margin: 10px;'>

                <br><p>Overall, it's very important that you try to answer based on what you saw.</p>
                <p>Do<em><strong> not </strong></em>answer questions based on what was in your imagination. <br><br> Click next to begin the questionnaire.</p>
                </div>`,
                    },
                ],
            },
        ],
    },
    data: {
        screen: "vhq_instructions",
    },
}

const items_vhq = {
    geometric1: "I saw shapes, lines, dots, or other geometric formations.",
    geometric2: "I saw geometrical patterns, similar to honeycombs, spirals, checkerboards, targets, or tunnels.",
    geometric3: "I saw patterns, such as repeating shapes or colours.",
    semantic1: "I saw things which looked like living beings, human-made objects, landscapes, or scenery.",
    semantic2: "My visual experience contained elements that resembled things in the real world.",
    semantic3: "I saw things similar to what I might see in dreams or normal waking life.",
    detail1: "My visual experience was rich with intricate detail.",
    detail2: "What I saw had fine details.",
    detail3: "I saw many little details and nuances.",
    vividness1: "My visual experience looked as though I was looking through a haze or through darkness.",
    vividness2: "It looked like what I saw was faded, washed out, or greyed out.",
    vividness3: "The colours or shades in my visual experience were mostly muted, dark, or dull. ",
    entropy1: "What I saw was very chaotic.",
    entropy2: "I saw a high level of randomness.",
    entropy3: "My visual experience was jumbled, unstructured, asymmetric, incoherent, or otherwise disordered.",
    focality1: "My visual experience was focused on one central point.",
    focality2: "What I saw was spread evenly across my visual field. There was no single focus.",
    focality3: "My visual experience had a clear focal point around which everything else was organised.",
    infrequency1: "I saw images of food, meals, snacks, or drinks.",
    infrequency2: "I am answering these questions specifically about my visual experience.",
}

//INFREQUENCY 3 BUILT SEPARATELY AS RESPONSE ISN'T REQUIRED
const infrequency3 = {
    type: "rating",
    name: "infrequency3",
    title: "If you are answering honestly, please do not answer this question. Simply leave the answer blank.",
    isRequired: false,
    minRateDescription: "no, not at all",
    maxRateDescription: "yes, very much so",
    rateValues: [1,2,3,4,5],
}

// shuffle once
const shuffled_vhq = shuffleObject(items_vhq)

// build ALL questions into one array
let elements_vhq = [] //is it ok that's is the same name as asc? I think it's fine as this is a global variable

// optional intro text (only once at top)
/*
elements_vhq.push({
    type: "html",
    html: "Think back to your strobe session.",
})
*/

// add all likert questions
for (const key of Object.keys(shuffled_vhq)) {
    elements_vhq.push({
        type: "rating",
        name: key,
        title: shuffled_vhq[key],
        isRequired: true,
        minRateDescription: "no, not at all",
        maxRateDescription: "yes, very much so",
        rateValues: [1,2,3,4,5],
        //defaultValueExpression: "50",
    })
}
//There's some extra stuff at the end on the online comp psiq

const randomIndex = Math.floor(Math.random() * (elements_vhq.length + 1))
elements_vhq.splice(randomIndex, 0, infrequency3) // add infrequency3 at the end of the shuffled items

var vhq = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        showNavigationButtons: true,
        completeText: "Submit",
        title: "Visual Experience Questionnaire",
        pages: [
            {elements: elements_vhq
            },
        ],
    },
    data: {
        screen: "vhq",
    },
}
