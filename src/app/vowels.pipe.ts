import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vowels'
})
export class VowelsPipe implements PipeTransform {

  transform(value: string) {
    //extracting all the vowels from the string
    let strArray = value.split('').filter(el => 'aeiou'.includes(el))

    //creating object with key as the vowel and value as the number of occurence
    const count = strArray.reduce((occurence, word) => {
      //checking if our key contains any value , if not assigning initial value 0 . if value exists incrementing it by one
      occurence[word] = (occurence[word] || 0) + 1;
      return occurence;
    }, {})

    return count;
  }

}
