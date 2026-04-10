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
let elements = []

// optional intro text (only once at top)
elements.push({
    type: "html",
    html: "Think back to your strobe session.",
})

// add all slider questions
for (const key of Object.keys(shuffled_items)) {
    elements.push({
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
                elements: elements,
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
        completeText: "Start",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "vhq_instructions",
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