//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let rnas = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
}

export const toRna = (dnaSequence) => {
    let rnaSequence = "";
    const nucleotides = dnaSequence.split("");
    for (let i = 0; i < dnaSequence.length; i++) {
        const dna = nucleotides[i];
        rnaSequence += rnas[dna];
    }

    return rnaSequence;
};
