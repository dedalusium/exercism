import { ADN } from './rna-transcription';

describe('Transcriptor', () => {
  test('empty rna sequence', () => {
    expect(new ADN('').toRna()).toEqual('');
  });

  test('transcribes cytosine to guanine', () => {
    expect(new ADN('C').toRna()).toEqual('G');
  });

  test('transcribes guanine to cytosine', () => {
    expect(new ADN('G').toRna()).toEqual('C');
  });

  test('transcribes adenine to uracil', () => {
    expect(new ADN('A').toRna()).toEqual('U');
  });

  test('transcribes thymine to adenine', () => {
    expect(new ADN('T').toRna()).toEqual('A');
  });

  test('transcribes all dna nucleotides to their rna complements', () => {
    expect(new ADN('ACGTGGTCTTAA').toRna())
      .toEqual('UGCACCAGAAUU');
  });

  test('correctly handles invalid input', () => {
    expect(() => new ADN('U').toRna()).toThrow(new Error('Invalid input DNA.'));
  });

  test('correctly handles completely invalid input', () => {
    expect(() => new ADN('XXX').toRna()).toThrow(new Error('Invalid input DNA.'));
  });

  test('correctly handles partially invalid input', () => {
    expect(() => new ADN('ACGTXXXCTTAA').toRna()).toThrow(new Error('Invalid input DNA.'));
  });
});
