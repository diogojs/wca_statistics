import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Result } from '../data';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ResultsService } from '../services/results.service';


@Component({
  selector: 'app-home-rankings',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home-rankings.component.html',
  styleUrl: './home-rankings.component.scss'
})
export class HomeRankingsComponent implements OnInit {
  results: Record<string, any> = {};
  filteredResults: Array<Result> = [];

  events: string[] = ["222", "333bf", "333", "333fm", "333mbf", "333oh", "333ft", "444bf", "444", "555bf", "555", "666", "777", "clock", "minx", "pyram", "skewb", "sq1"];
  states = [
    {name: 'Acre', abbrev: 'AC'},
    {name: 'Alagoas', abbrev: 'AL'},
    {name: 'Amapá', abbrev: 'AP'},
    {name: 'Amazonas', abbrev: 'AM'},
    {name: 'Bahia', abbrev: 'BA'},
    {name: 'Ceará', abbrev: 'CE'},
    {name: 'Espírito Santo', abbrev: 'ES'},
    {name: 'Goiás', abbrev: 'GO'},
    {name: 'Maranhão', abbrev: 'MA'},
    {name: 'Mato Grosso', abbrev: 'MT'},
    {name: 'Mato Grosso do Sul', abbrev: 'MS'},
    {name: 'Minas Gerais', abbrev: 'MG'},
    {name: 'Pará', abbrev: 'PA'},
    {name: 'Paraíba', abbrev: 'PB'},
    {name: 'Paraná', abbrev: 'PR'},
    {name: 'Pernambuco', abbrev: 'PE'},
    {name: 'Piauí', abbrev: 'PI'},
    {name: 'Rio de Janeiro', abbrev: 'RJ'},
    {name: 'Rio Grande do Norte', abbrev: 'RN'},
    {name: 'Rio Grande do Sul', abbrev: 'RS'},
    {name: 'Rondônia', abbrev: 'RO'},
    {name: 'Roraima', abbrev: 'RR'},
    {name: 'Santa Catarina', abbrev: 'SC'},
    {name: 'São Paulo', abbrev: 'SP'},
    {name: 'Sergipe', abbrev: 'SE'},
    {name: 'Tocantins', abbrev: 'TO'},
    {name: 'Distrito Federal', abbrev: 'DF'}
  ]

  currentEvent: string = "333";
  currentState: string = "";
  currentKindOfResult: string = "single";

  constructor(private resultsService: ResultsService) { }

  ngOnInit(): void {
    let mock = {
        "competitors": {
          "2022SOUZ13": {
              "name": "Diogo Junior de Souza",
              "state": "SC"
          },
          "2023BERT03": {
              "name": "C\u00e9sar Oct\u00e1vio Bertoncini",
              "state": "SC"
          },
          "2023KLAP03": {
              "name": "Ana Carolini Agostini Klappoth",
              "state": "SC"
          },
          "2023MEND17": {
              "name": "Artur Augusto Mendes",
              "state": "SC"
          },
          "2016SATO01": {
              "name": "Caio Hideaki Sato",
              "state": "SP"
          },
          "2015CECC01": {
              "name": "Vicenzo Guerino Cecchini",
              "state": "SP"
          }
        },
        "results": {
            "single": {
                "222": [
                    {
                        "id": "2016SATO01",
                        "single": 80
                    },
                    {
                        "id": "2015CECC01",
                        "single": 80
                    },
                    {
                        "id": "2023MEND17",
                        "single": 233
                    },
                    {
                        "id": "2022SOUZ13",
                        "single": 425
                    },
                    {
                        "id": "2023BERT03",
                        "single": 554
                    }
                ],
                "333bf": [
                    {
                        "id": "2015CECC01",
                        "single": 4526
                    },
                    {
                        "id": "2022SOUZ13",
                        "single": 11663
                    }
                ],
                "333": [
                    {
                        "id": "2016SATO01",
                        "single": 437
                    },
                    {
                        "id": "2015CECC01",
                        "single": 486
                    },
                    {
                        "id": "2023MEND17",
                        "single": 739
                    },
                    {
                        "id": "2023BERT03",
                        "single": 1379
                    },
                    {
                        "id": "2022SOUZ13",
                        "single": 1497
                    },
                    {
                        "id": "2023KLAP03",
                        "single": 3033
                    }
                ],
                "333fm": [
                    {
                        "id": "2015CECC01",
                        "single": 24
                    },
                    {
                        "id": "2016SATO01",
                        "single": 30
                    }
                ],
                "333mbf": [
                    {
                        "id": "2015CECC01",
                        "single": 920287000
                    },
                    {
                        "id": "2022SOUZ13",
                        "single": 940233800
                    }
                ],
                "333oh": [
                    {
                        "id": "2016SATO01",
                        "single": 717
                    },
                    {
                        "id": "2015CECC01",
                        "single": 918
                    },
                    {
                        "id": "2023MEND17",
                        "single": 1615
                    },
                    {
                        "id": "2022SOUZ13",
                        "single": 2720
                    },
                    {
                        "id": "2023BERT03",
                        "single": 4693
                    }
                ],
                "333ft": [
                    {
                        "id": "2015CECC01",
                        "single": 2846
                    },
                    {
                        "id": "2016SATO01",
                        "single": 3515
                    }
                ],
                "444bf": [
                    {
                        "id": "2015CECC01",
                        "single": 45968
                    }
                ],
                "444": [
                    {
                        "id": "2016SATO01",
                        "single": 2183
                    },
                    {
                        "id": "2015CECC01",
                        "single": 2229
                    },
                    {
                        "id": "2023BERT03",
                        "single": 6359
                    },
                    {
                        "id": "2022SOUZ13",
                        "single": 7453
                    },
                    {
                        "id": "2023KLAP03",
                        "single": 9186
                    }
                ],
                "555bf": [
                    {
                        "id": "2015CECC01",
                        "single": 200600
                    }
                ],
                "555": [
                    {
                        "id": "2016SATO01",
                        "single": 4390
                    },
                    {
                        "id": "2015CECC01",
                        "single": 4765
                    },
                    {
                        "id": "2023BERT03",
                        "single": 15351
                    },
                    {
                        "id": "2022SOUZ13",
                        "single": 19827
                    }
                ],
                "666": [
                    {
                        "id": "2015CECC01",
                        "single": 9967
                    },
                    {
                        "id": "2016SATO01",
                        "single": 10648
                    }
                ],
                "777": [
                    {
                        "id": "2015CECC01",
                        "single": 15524
                    },
                    {
                        "id": "2016SATO01",
                        "single": 18284
                    }
                ],
                "clock": [
                    {
                        "id": "2016SATO01",
                        "single": 529
                    },
                    {
                        "id": "2015CECC01",
                        "single": 573
                    },
                    {
                        "id": "2023KLAP03",
                        "single": 946
                    },
                    {
                        "id": "2023BERT03",
                        "single": 979
                    },
                    {
                        "id": "2022SOUZ13",
                        "single": 1203
                    }
                ],
                "minx": [
                    {
                        "id": "2016SATO01",
                        "single": 3816
                    },
                    {
                        "id": "2015CECC01",
                        "single": 4084
                    },
                    {
                        "id": "2023MEND17",
                        "single": 7142
                    },
                    {
                        "id": "2022SOUZ13",
                        "single": 9976
                    },
                    {
                        "id": "2023BERT03",
                        "single": 13670
                    },
                    {
                        "id": "2023KLAP03",
                        "single": 16436
                    }
                ],
                "pyram": [
                    {
                        "id": "2016SATO01",
                        "single": 180
                    },
                    {
                        "id": "2015CECC01",
                        "single": 184
                    },
                    {
                        "id": "2023MEND17",
                        "single": 574
                    },
                    {
                        "id": "2023BERT03",
                        "single": 707
                    },
                    {
                        "id": "2023KLAP03",
                        "single": 716
                    },
                    {
                        "id": "2022SOUZ13",
                        "single": 995
                    }
                ],
                "skewb": [
                    {
                        "id": "2016SATO01",
                        "single": 180
                    },
                    {
                        "id": "2015CECC01",
                        "single": 198
                    },
                    {
                        "id": "2023MEND17",
                        "single": 351
                    },
                    {
                        "id": "2023BERT03",
                        "single": 595
                    },
                    {
                        "id": "2023KLAP03",
                        "single": 841
                    },
                    {
                        "id": "2022SOUZ13",
                        "single": 928
                    }
                ],
                "sq1": [
                    {
                        "id": "2015CECC01",
                        "single": 449
                    },
                    {
                        "id": "2016SATO01",
                        "single": 1634
                    }
                ]
            },
            "average": {
                "222": [
                    {
                        "id": "2015CECC01",
                        "average": 162
                    },
                    {
                        "id": "2016SATO01",
                        "average": 176
                    },
                    {
                        "id": "2023MEND17",
                        "average": 342
                    },
                    {
                        "id": "2022SOUZ13",
                        "average": 661
                    },
                    {
                        "id": "2023BERT03",
                        "average": 673
                    }
                ],
                "333bf": [
                    {
                        "id": "2015CECC01",
                        "average": 6679
                    },
                    {
                        "id": "2022SOUZ13",
                        "average": 17436
                    }
                ],
                "333": [
                    {
                        "id": "2016SATO01",
                        "average": 559
                    },
                    {
                        "id": "2015CECC01",
                        "average": 596
                    },
                    {
                        "id": "2023MEND17",
                        "average": 922
                    },
                    {
                        "id": "2023BERT03",
                        "average": 1713
                    },
                    {
                        "id": "2022SOUZ13",
                        "average": 1714
                    },
                    {
                        "id": "2023KLAP03",
                        "average": 3601
                    }
                ],
                "333fm": [
                    {
                        "id": "2015CECC01",
                        "average": 2833
                    },
                    {
                        "id": "2016SATO01",
                        "average": 3267
                    }
                ],
                "333mbf": [],
                "333oh": [
                    {
                        "id": "2016SATO01",
                        "average": 940
                    },
                    {
                        "id": "2015CECC01",
                        "average": 1150
                    },
                    {
                        "id": "2023MEND17",
                        "average": 1787
                    },
                    {
                        "id": "2022SOUZ13",
                        "average": 4109
                    }
                ],
                "333ft": [
                    {
                        "id": "2015CECC01",
                        "average": 3258
                    },
                    {
                        "id": "2016SATO01",
                        "average": 5126
                    }
                ],
                "444bf": [],
                "444": [
                    {
                        "id": "2016SATO01",
                        "average": 2576
                    },
                    {
                        "id": "2015CECC01",
                        "average": 2645
                    },
                    {
                        "id": "2023BERT03",
                        "average": 7051
                    },
                    {
                        "id": "2022SOUZ13",
                        "average": 7870
                    },
                    {
                        "id": "2023KLAP03",
                        "average": 10879
                    }
                ],
                "555bf": [],
                "555": [
                    {
                        "id": "2016SATO01",
                        "average": 5184
                    },
                    {
                        "id": "2015CECC01",
                        "average": 5403
                    }
                ],
                "666": [
                    {
                        "id": "2015CECC01",
                        "average": 10299
                    },
                    {
                        "id": "2016SATO01",
                        "average": 11531
                    }
                ],
                "777": [
                    {
                        "id": "2015CECC01",
                        "average": 15810
                    },
                    {
                        "id": "2016SATO01",
                        "average": 19883
                    }
                ],
                "clock": [
                    {
                        "id": "2016SATO01",
                        "average": 632
                    },
                    {
                        "id": "2015CECC01",
                        "average": 711
                    },
                    {
                        "id": "2023KLAP03",
                        "average": 1058
                    },
                    {
                        "id": "2023BERT03",
                        "average": 1206
                    },
                    {
                        "id": "2022SOUZ13",
                        "average": 1261
                    }
                ],
                "minx": [
                    {
                        "id": "2016SATO01",
                        "average": 4126
                    },
                    {
                        "id": "2015CECC01",
                        "average": 4495
                    },
                    {
                        "id": "2023MEND17",
                        "average": 8306
                    },
                    {
                        "id": "2022SOUZ13",
                        "average": 11931
                    },
                    {
                        "id": "2023BERT03",
                        "average": 13926
                    },
                    {
                        "id": "2023KLAP03",
                        "average": 19364
                    }
                ],
                "pyram": [
                    {
                        "id": "2015CECC01",
                        "average": 241
                    },
                    {
                        "id": "2016SATO01",
                        "average": 258
                    },
                    {
                        "id": "2023MEND17",
                        "average": 883
                    },
                    {
                        "id": "2023BERT03",
                        "average": 988
                    },
                    {
                        "id": "2023KLAP03",
                        "average": 1132
                    },
                    {
                        "id": "2022SOUZ13",
                        "average": 1173
                    }
                ],
                "skewb": [
                    {
                        "id": "2016SATO01",
                        "average": 302
                    },
                    {
                        "id": "2015CECC01",
                        "average": 313
                    },
                    {
                        "id": "2023MEND17",
                        "average": 561
                    },
                    {
                        "id": "2023BERT03",
                        "average": 836
                    },
                    {
                        "id": "2023KLAP03",
                        "average": 1479
                    },
                    {
                        "id": "2022SOUZ13",
                        "average": 1809
                    }
                ],
                "sq1": [
                    {
                        "id": "2015CECC01",
                        "average": 546
                    },
                    {
                        "id": "2016SATO01",
                        "average": 2829
                    }
                ]
            }
        }
    }
    // this.results = mock;
    this.resultsService.getResults().subscribe(
      (response: JSON) => {
        this.results = response;
        console.log(response);
        this.updateFilteredResults();
      }
    )
  }

  updateFilteredResults(): void {
    let filtered = this.results['results'][this.currentKindOfResult][this.currentEvent].map(
      (pResult: any) => {
        return {
          name: this.results['competitors'][pResult.id].name,
          result: pResult[this.currentKindOfResult],
          state: this.results['competitors'][pResult.id].state,
          competition: ""
        };
      }
    );

    if (this.currentState != "") {
      this.filteredResults = filtered.filter(
        (result: Result) => (result.state == this.currentState)
      );
    } else {
      this.filteredResults = filtered;
    }
  }

  changeEventTo(cubingEvent: string): void {
    this.currentEvent = cubingEvent;
    this.updateFilteredResults();
  }

  changeStateTo(state: string): void {
    this.currentState = state;
    this.updateFilteredResults();
  }

  changeKindTo(kind: string): void {
    this.currentKindOfResult = kind;
    this.updateFilteredResults();
  }

  viewResult(result: number): string {
    if (this.currentEvent == "333fm")
      return result.toString();
    
    // TODO: handle MultiBLD cases
    // TODO: convert to minutes:seconds

    return (result / 100).toFixed(2);
  }
}
