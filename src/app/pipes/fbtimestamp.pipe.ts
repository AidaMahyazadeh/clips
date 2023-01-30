import { Pipe, PipeTransform } from '@angular/core';
import firebase from 'firebase/compat';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'fbtimestamp'
})
export class FbtimestampPipe implements PipeTransform {
constructor (private dataPipe:DatePipe){}
  transform(value: firebase.firestore.FieldValue | undefined) {
    if(!value){
      return ''
    }
    const date =(value as firebase.firestore.Timestamp).toDate()
    return this.dataPipe.transform(date,'mediumDate');
  }

}
