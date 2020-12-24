codons_to_proteins = {
    "AUG": "Methionine",
    "UUU": "Phenylalanine",
    "UUC": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "UCU": "Serine",
    "UCC": "Serine",
    "UCA": "Serine",
    "UCG": "Serine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UGU": "Cysteine",
    "UGC": "Cysteine",
    "UGG": "Tryptophan",
    "UAA": "STOP",
    "UAG": "STOP",
    "UGA": "STOP",
}


def proteins(strand):
    remaining_rna = strand
    found_proteins = []
    next_protein = ''
    while len(remaining_rna) > 0 and next_protein != 'STOP':
        next_codon = remaining_rna[0:3]
        next_protein = codons_to_proteins.get(next_codon)
        remaining_rna = remaining_rna[3:len(remaining_rna)]
        if next_protein != 'STOP':
            found_proteins.append(next_protein)
    return found_proteins
