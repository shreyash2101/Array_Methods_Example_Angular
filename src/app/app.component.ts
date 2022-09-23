import { Component } from '@angular/core';
import { animals } from './animals';
import { AnimalTypeEnum } from './animal';
import { groupBy } from 'rxjs/operators';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  animals = animals;
  sortData(event) {
    this.animals.sort((a, b) => {
      if (event.target.value == 'Age') return a.age - b.age;
      return a.name.localeCompare(b.name);
    });
  }

  filterData(event) {
    this.animals = animals;
    switch (event.target.value) {
      case 'dog': {
        return (this.animals = animals.filter((animal) => {
          return animal.type == AnimalTypeEnum.Dog;
        }));
      }
      case 'cat': {
        return (this.animals = animals.filter((animal) => {
          return animal.type == AnimalTypeEnum.Cat;
        }));
      }
      case 'lion': {
        return (this.animals = animals.filter((animal) => {
          return animal.type == AnimalTypeEnum.Lion;
        }));
      }
      case 'bird': {
        return (this.animals = animals.filter((animal) => {
          return animal.type == AnimalTypeEnum.Bird;
        }));
      }
      default: {
        console.log(this.animals);
        return this.animals;
      }
    }
  }

  groupData() {
    let groupedAnimals = this.animals.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      if (!result[currentValue['type']]) result[currentValue['type']] = [];
      result[currentValue['type']].push(currentValue);
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, []); // empty
    this.animals = [];
    groupedAnimals.map((group) => {
      this.animals.push(...group);
    });
    console.log(groupedAnimals);
  }
}
