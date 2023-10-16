
                                        let username = prompt('Кто там?', '');
                                        if (username == 'Админ') {
                                          let password = prompt('Пароль?', '');
                                          if (password == 'Я главный') {
                                          alert( 'Здравствуйте!' );
                                          } 
                                          else if (password != 'Я главный') {
                                          alert( 'Неверный пароль' );
                                          } 
                                          else if (password == 'null') {
                                          alert( 'Отменено' );
                                     } 
                                     } 
                                     else if (username == '') {
                                    alert( 'Отменено' );
                                     } 
                                     else if (username == 'null') {
                                    alert( 'Отменено' );
                                     }
                                     else if (username != 'Админ') {
                                    alert( 'Я вас не знаю' );
                                     }