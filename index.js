
/*profile*/
const profileBtn = document.querySelector('.profile_btn')
const modalProfileBackground = document.querySelector('.modla_profile_background')
const modalProfileBackgroundClose =document.querySelector('.modal_profile_close')
const scroll = document.querySelector('.body')


function openCloseRegLogIn() {
  modalProfileBackgroundClose.classList.toggle('modal_profile_close')
}

        /*close_all_modal_win_click_on_bg*/
        function closeClickOnBackground () {
                if  (event.target === modalProfileBackground) {
                  modalProfileBackground.classList.add('modal_profile_close')
              }
          }
          modalProfileBackground.addEventListener('click', event => {
            closeClickOnBackground ()
          })
        /*close_all_modal_win_click_on_bg*/

              /*close_click_on_wrapper*/
                const regLogInWrapper = document.querySelector('.reg_log_in_wrapper')
                function closeClickOnWrapper () {
                        if  (event.target === regLogInWrapper) {
                          modalProfileBackground.classList.add('modal_profile_close')
                      }
                  }
                  regLogInWrapper.addEventListener('click', event => {
                    closeClickOnWrapper ()
                  })
              /*/*close_click_on_wrapper*/


profileBtn.addEventListener('click', event =>{
  openCloseRegLogIn()
 })



   /*open_log_in_window*/
    const logInBtn =document.querySelector('.log_in')
    const modalProfileLogInclose = document.querySelector('.modal_profile_log_in_close')
    const crossCloseLogIn = document.querySelector('.img_close_login_window')
    const btnRegLogInWin = document.querySelector('.reg_button_log_in_win')

    let logInWinOpened = false
    function openLogInWindow (){
        modalProfileLogInclose.classList.remove('modal_profile_log_in_close')
        modalProfileBackgroundClose.classList.add('modal_profile_close')
        logInWinOpened = true
      }

      logInBtn.addEventListener('click', event=> {
        openLogInWindow ()
      })

      crossCloseLogIn.addEventListener('click', event=> {
        modalProfileLogInclose.classList.add('modal_profile_log_in_close')
        modalProfileBackgroundClose.classList.add('modal_profile_close')
        logInWinOpened = false
      })

      profileBtn.addEventListener('click', event =>{
        if (logInWinOpened===true) {
          modalProfileLogInclose.classList.add('modal_profile_log_in_close')
          logInWinOpened = false
        }
       })


        modalProfileLogInclose.addEventListener('click', event=> {
          if  (event.target === modalProfileLogInclose) {
              logInWinOpened=false
              modalProfileLogInclose.classList.add('modal_profile_log_in_close')
          }
        })
  /*/open_log_in_window*/


  /*open_registration_window*/
  const regBtn = document.querySelector('.reg')
  const modalProfileRegClose = document.querySelector('.modal_profile_reg_close')
  const btnCloseRegWindow = document.querySelector('.img_close_reg_window')
  const btnLogInRegWindow = document.querySelector('.log_in_button_reg_win')

  let regWindIsOpened =false
    function openRegWind () {
      modalProfileRegClose.classList.remove('modal_profile_reg_close')
      modalProfileBackgroundClose.classList.add('modal_profile_close')
      regWindIsOpened =true
    }

    function closeRegWind () {
      modalProfileRegClose.classList.add('modal_profile_reg_close')
      modalProfileBackgroundClose.classList.add('modal_profile_close')
      regWindIsOpened =false
    }

                  /*open_log_win_through_reg_win*/

                  function openLogInWinInRegWin () {
                    if (regWindIsOpened===true) {
                      modalProfileLogInclose.classList.remove('modal_profile_log_in_close')
                      logInWinOpened = true
                      modalProfileRegClose.classList.add('modal_profile_reg_close')
                      regWindIsOpened=false
                    }

                  }

                  regBtn.addEventListener('click', event=> {
                    openRegWind ()
                  })

                  /*/open_log_win_through_reg_win*/

      profileBtn.addEventListener('click', event =>{
        if (regWindIsOpened===true) {
          modalProfileRegClose.classList.add('modal_profile_reg_close')
          logInWinOpened = false
          }
        })

     modalProfileRegClose.addEventListener('click', event=> {
          if  (event.target === modalProfileRegClose) {
              regWindIsOpened =false
              modalProfileRegClose.classList.add('modal_profile_reg_close')
          }
      })

      btnLogInRegWindow.addEventListener('click', event=> {
        openLogInWinInRegWin ()
      })


      btnCloseRegWindow.addEventListener('click', event=> {
        closeRegWind ()
      })

                /*open registrtion Win through the LogIn window*/
                function openRegWinInLogInWin () {
                  if (logInWinOpened === true) {
                    modalProfileRegClose.classList.remove('modal_profile_reg_close')
                    regWindIsOpened = true
                    modalProfileLogInclose.classList.add('modal_profile_log_in_close')
                    logInWinOpened = false
                  }else {

                  }
                }

                btnRegLogInWin.addEventListener('click', event=> {
                  openRegWinInLogInWin ()
                  console.log (openRegWinInLogInWin())
                })
                /*/open registrtion Win through rhe LogIn window*/


  /*/open_registration_window/





  /________________________________*LOCAL_STORAGE*_____________________________/
  
  /*registration*/
const InputReg= document.querySelectorAll('.input_reg')
const btnModalReg = document.querySelector ('.modal_btn_reg')
const mailRegInput = document.querySelector ('.mail_reg_input')
const libraryCardLogOut = document.querySelector('.digital_library_cards_log_out')
const libraryCardLogIn = document.querySelector('.digital_library_cards_log_in')

let inputsAreEmpty = false
function emptyInputs () {
  for (let i = 0; i<InputReg.length; i++) {
    if (InputReg[i].value ==='') {
      inputsAreEmpty = true
      alert('fill all inputs')
      break
     }else {
      inputsAreEmpty = false
     }
  }
}


/*function for checking local storage that it's not empty*/
let userCounter =0
  function exeistUsers () {
    let existUsersArr = []
  for (let i = 0; i<localStorage.length; i++) {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.startsWith("user")) {
        let existedUsers = JSON.parse(localStorage.getItem(key));
        existUsersArr.push(existedUsers);
      }
    }
    for (let j =0; j<existUsersArr.length; j++) {
      userCounter+=1
  }
  return userCounter
  }
  }
/*function for checking local storage that it's not empty*/

let mailIsValid = false
function isEmailValid () {
  const validExpression = /^[\w-.]+@[\w-]+\.[\w-]{2,4}$/
if (inputsAreEmpty=== false) {
  if(validExpression.test(mailRegInput.value)) {
    mailIsValid = true
  } else {
    alert('invalid mail adress')
    mailIsValid =false
  }
}

}


let compariedMail = false
function compairMail () {
      let usersArrCheckMail = []
      for (let i = 0; i<localStorage.length; i++) {
        let key=  localStorage.key(i)
        if(key.startsWith('user')) {
          let  users = JSON.parse(localStorage.getItem(key))
          usersArrCheckMail.push(users)
        }
      }


      for (let j = 0; j<usersArrCheckMail.length; j++) {
        if (usersArrCheckMail[j].eMail === mailRegInput.value ) {
          alert ('the mail addres has already existed')
          compariedMail = true
          break
       } else {
         compariedMail = false
       }
      }

}

 let userIsReg = false
function newUser () {
  exeistUsers ()
  isEmailValid ()
  if (inputsAreEmpty===false && compariedMail===false && mailIsValid === true) {
    for (let i = 0; i<InputReg.length; i+=5) {

    let user = {
      firstName:'',
      LastName:'',
      eMail:'',
      password:'',
      loggedIn: false,
      visits: 0
     }

       user.firstName = InputReg[i].value
       user.LastName = InputReg[i+1].value
       user.eMail = InputReg[i+2].value
       user.password = InputReg[i+3].value
       let key = "user" + userCounter
       localStorage.setItem(key, JSON.stringify(user))
       userCounter++
       userIsReg = true
    }
  } else {
    userIsReg = false
  }

}

function clearRegInputs () { 
  if (userIsReg === true) {
      for (let j=0; j<InputReg.length; j++) {
        InputReg[j].value=''
        inputsAreEmpty = true
      }
  }else {
    inputsAreEmpty = false
  }
}

function closeRegWindAfterReg () {
  if (userIsReg===true) {
    modalProfileRegClose.classList.add('modal_profile_reg_close')
    regWindIsOpened =false
  }
}



        /*/visits_counter*/
        const visitsCounter = document.querySelector('.visits_counter')
            function visitCounter () {
              for (let i = 0; i<localStorage.length; i++) {
                let key = localStorage.key(i)
                if (key.startsWith('user')) {
                  let user = JSON.parse(localStorage.getItem(key))
                  if (user.loggedIn===true) {
                        user.visits+=1
                        localStorage.setItem(key, JSON.stringify(user))
                  }
                }
              }
            }

            function getAmountOfVisits () {
              let visitsStr=''
              for (let i = 0; i<localStorage.length; i++) {
                let key = localStorage.key(i)
                if (key.startsWith('user')) {
                  let user = JSON.parse(localStorage.getItem(key))
                  if (user.loggedIn===true) {
                        visitsStr = user.visits
                  }
                }
              }
             return  visitsCounter.textContent = visitsStr
            }
  
            console.log (getAmountOfVisits ())
          /*/visits_counter*/


          /*log_in_regBtn*/
          let userIsfound = false
          function logInRegBtn () {
            if(userIsReg===true) {
              for (let i = 0; i<localStorage.length; i++) {
                let key = localStorage.key(i)
                if (key.startsWith('user')) {
                  let user = JSON.parse(localStorage.getItem(key))
                  if (user.eMail===InputReg[2].value && user.password===InputReg[3].value) {
                    modalProfileLogInclose.classList.add('modal_profile_log_in_close')
                    userIsfound = true
                    break
                  }
              }
            }
          }
          }

          window.addEventListener('load', event =>{
            logInRegBtn ()
          })


          function userLoggedRegBtn () {
            if (userIsfound === true) {
             for (let i = 0; i<localStorage.length; i++) {
               let key = localStorage.key(i)
               if (key.startsWith('user')) {
                   let user = JSON.parse(localStorage.getItem(key))
                if (user.eMail===InputReg[2].value && user.password===InputReg[3].value) {
                    user.loggedIn = true
                    localStorage.setItem(key, JSON.stringify(user))
                }else {
                  user.loggedIn = false
                    localStorage.setItem(key, JSON.stringify(user))
                }
               }
             }
             }
            }
        
            window.addEventListener('load', event=> {
              userLoggedRegBtn ()
            })
            /*/log_in_regBtn*/

            /*open_check_digital_library_card*/
            function digitalLibraryCardLogIn () {
              let  userLogged = []
              for (let i = 0; i<localStorage.length; i++) {
               let key = localStorage.key(i)
               if (key.startsWith('user')) {
                 let user = JSON.parse(localStorage.getItem(key))
                 userLogged.push(user)
              }
             }
             if (userLogged.some(user =>user.loggedIn===true)){
                    libraryCardLogOut.classList.add('digital_library_cards_log_out')
                    libraryCardLogIn.classList.remove('digital_library_cards_log_in')
                  }
              }


            window.addEventListener('load', event=> {
              digitalLibraryCardLogIn ()
            })


            function digitalLibraryCardLogOut () {
              let  userLogged = []
              for (let i = 0; i<localStorage.length; i++) {
               let key = localStorage.key(i)
               if (key.startsWith('user')) {
                 let user = JSON.parse(localStorage.getItem(key))
                 userLogged.push(user)
              }
             }
             if (userLogged.every(user =>user.loggedIn===false)){
                    libraryCardLogOut.classList.remove('digital_library_cards_log_out')
                    libraryCardLogIn.classList.add('digital_library_cards_log_in')
                  }
              }

            window.addEventListener('load', event=> {
              digitalLibraryCardLogOut ()
            })

            /*/open_check_digital_library_card*/


  btnModalReg.addEventListener('click', event=>{
    emptyInputs ()
    compairMail ()
    visitCounter ()
    getAmountOfVisits ()
    visitsCounter
    newUser ()
            /*logIn*/
            logInRegBtn ()
            userLoggedRegBtn ()
            showMyProfileBtn ()
            getInitials ()
            initials
            initiasAboutUser
            getFirstAndLastName ()
            userNameTitle
            visitCounter ()
            getAmountOfVisits ()
            visitsCounter
            /*/logIn*/
            digitalLibraryCardLogIn ()
    closeRegWindAfterReg ()

  })

  /*/registration*/

/*logIn*/

const inputsLogIn = document.querySelectorAll('.input_log_in')
const inputLogInMail = document.querySelector('.mail_log_in_input')
const btnLogIn = document.querySelector('.modal_btn_log_in')

let inputsLogInAreEmpty =false
function emptyLogInInputs () {
  for (let i=0; i<inputsLogIn.length; i++) {
    if (inputsLogIn[i].value==='') {
      alert ('fill all inputs')
      inputsLogInAreEmpty=true
      break
    }else {
      inputsLogInAreEmpty=false
    }
  }
}




  function logIn () {
    for (let i = 0; i<localStorage.length; i++) {
      let key = localStorage.key(i)
      if (key.startsWith('user')) {
        let user = JSON.parse(localStorage.getItem(key))
        if (user.eMail === inputsLogIn[0].value && user.password===inputsLogIn[1].value) {
          modalProfileLogInclose.classList.add('modal_profile_log_in_close')
          userIsfound = true
          break
        }
      }
    } if (!userIsfound) {
      alert('wrong')
      userIsfound = false
   }
  }

   function userLogged () {
    if (userIsfound === true) {
     for (let i = 0; i<localStorage.length; i++) {
       let key = localStorage.key(i)
       if (key.startsWith('user')) {
           let user = JSON.parse(localStorage.getItem(key))
        if (user.eMail === inputsLogIn[0].value && user.password===inputsLogIn[1].value) {
            user.loggedIn = true
            localStorage.setItem(key, JSON.stringify(user))
        }else {
          user.loggedIn = false
            localStorage.setItem(key, JSON.stringify(user))
        }
       }
     }
     }
    }

    window.addEventListener('load', event=> {
      userLogged ()
    })

const  profileBtnLoggedOutClose = document.querySelector('.profile_btn_logged_out_close')
const  profileBtnLoggedInClose = document.querySelector('.profile_btn_loggedIn_close')
const  modalProfileMyProfileClose = document.querySelector('.modal_profile_my_profile_close')


let  myProfileBtnIsShown =false
function showMyProfileBtn () {
   let  userLogged = []
   for (let i = 0; i<localStorage.length; i++) {
    let key = localStorage.key(i)
    if (key.startsWith('user')) {
      let user = JSON.parse(localStorage.getItem(key))
      userLogged.push(user)
   }
  }
  if (userLogged.some(user =>user.loggedIn===true)) {
    profileBtnLoggedInClose.classList.remove('profile_btn_loggedIn_close')
    profileBtnLoggedOutClose.classList.add('profile_btn_logged_out_close')
    myProfileBtnIsShown =true
  }else {
    myProfileBtnIsShown =false
  }
}

window.addEventListener('load', event=> {
  showMyProfileBtn ()
})


function clearLogInInputs () {
  if (inputsLogInAreEmpty===false) {
    for (let i=0; i<inputsLogIn.length; i++) {
       inputsLogIn[i].value=''
       inputsLogInAreEmpty=true
    }
  }
}

            /*get_initials_*/
            const  initials = document.querySelector('.profile_btn_loggedIn_title')
            const initiasAboutUser = document.querySelector('.initials')
            function getInitials () {
              let firstName =[]
              let LastName =[]
              for (let i = 0; i<localStorage.length; i++) {
                let key = localStorage.key(i)
                if (key.startsWith('user')) {
                  let user = JSON.parse(localStorage.getItem(key))
                  if (user.loggedIn===true) {
                    firstName = user.firstName.split('')
                    LastName = user.LastName.split('')
                  }
                }
              }
                let firstInitial = firstName[0].toUpperCase()
                let lastInitial = LastName[0].toUpperCase()
                let initialsString = firstInitial + lastInitial
                initials.textContent = initialsString
                initiasAboutUser.textContent=initialsString
            }
            window.addEventListener('load', event=> {
              getInitials ()
              initials
              initiasAboutUser
            })
            /*get_initials_*/
            /*get_first_andLastnamr*/
            const userNameTitle = document.querySelector('.user_name_title')
            function getFirstAndLastName () {
              let firstName =''
              let LastName =''
              for (let i = 0; i<localStorage.length; i++) {
                let key = localStorage.key(i)
                if (key.startsWith('user')) {
                  let user = JSON.parse(localStorage.getItem(key))
                  if (user.loggedIn===true) {
                    firstName = user.firstName
                    LastName = user.LastName
                  }
                }
              }
              let getFirstAndLastName = firstName+' '+LastName
              userNameTitle.textContent = getFirstAndLastName
            }
            window.addEventListener('load', event=> {
              getFirstAndLastName ()
              userNameTitle
            })
            /*/get_first_andLastnamr*/


  btnLogIn.addEventListener('click', event=> {
  emptyLogInInputs ()
  logIn ()
  userLogged ()
  clearLogInInputs ()
  showMyProfileBtn ()
  digitalLibraryCardLogIn ()
              getInitials ()
              initials
              initiasAboutUser
              getFirstAndLastName ()
              userNameTitle
              visitCounter ()
              getAmountOfVisits ()
              visitsCounter
})

/*/logIn*/



/*userIsLoggedIn*/
      /*open_close_modal_win_my_profile*/
      let winMyProfileIsOpend = false
      function  openCloseModalMyProfile () {
        if (myProfileBtnIsShown ===true) {
          for (let i = 0; i<localStorage.length; i++) {
            let key = localStorage.key(i)
            if (key.startsWith('user')) {
              let user = JSON.parse(localStorage.getItem(key))
              if (user.loggedIn===true) {
                if (modalProfileMyProfileClose.classList.contains('modal_profile_my_profile_close')) {
                  modalProfileMyProfileClose.classList.remove('modal_profile_my_profile_close');
                  winMyProfileIsOpend = true
                } else if (user.loggedIn===true) {
                  modalProfileMyProfileClose.classList.add('modal_profile_my_profile_close');
                  winMyProfileIsOpend = false
                }
              }
            }
          }
        }
      }

      function closeModalMyProfileOnBg () {
        if (event.target===modalProfileMyProfileClose) {
          modalProfileMyProfileClose.classList.add('modal_profile_my_profile_close');
          winMyProfileIsOpend = false
        }
      }

      modalProfileMyProfileClose.addEventListener('click', event=>{
        closeModalMyProfileOnBg ()
      })

            profileBtnLoggedInClose.addEventListener ('click', event=> {
            openCloseModalMyProfile ()
            })
      /*/open_close_modal_win_my_profile*/

    /*openc_close_about_user*/

      const  myProfileBtn = document.querySelector('.my_profile')
      const modalAboutUser = document.querySelector ('.modal_profile_about_user_close')
      const crossBtnCloseAboutUser=document.querySelector('.img_close_aboutUser_window')

      let modalAboutUserIsOpened = false
      function openCloseAboutUserWin () {
        if (winMyProfileIsOpend === true) {
            if (modalAboutUser.classList.contains('modal_profile_about_user_close')) {
                modalAboutUser.classList.remove('modal_profile_about_user_close')
                modalProfileMyProfileClose.classList.add('modal_profile_my_profile_close')
                visitsCounter
                modalAboutUserIsOpened = true
            }else {
                modalAboutUser.classList.add('modal_profile_about_user_close')
                modalProfileMyProfileClose.classList.add('modal_profile_my_profile_close')
              modalAboutUserIsOpened = false
            }
        }
      }
      myProfileBtn.addEventListener('click', event=> {
        openCloseAboutUserWin ()
      })

      function closeAboutUserWinBg () {
        if (event.target === modalAboutUser){
          modalAboutUser.classList.add('modal_profile_about_user_close')
          modalAboutUserIsOpened = false
        }
      }
      modalAboutUser.addEventListener('click', event=> {
        closeAboutUserWinBg ()
      })
      function closeAboutUserWinCross () {
        modalAboutUser.classList.add('modal_profile_about_user_close')
        modalAboutUserIsOpened = false
      }
      crossBtnCloseAboutUser.addEventListener('click', event=> {
        closeAboutUserWinCross ()
      })
      /*/open_close_about_user*/

/*userIsLoggedIn*/

                  /*logOut*/
                  const  logOutBtn = document.querySelector('.log_out')
                  function logOut () {
                    for (let i = 0; i<localStorage.length; i++) {
                      let key = localStorage.key(i)
                      if (key.startsWith('user')) {
                        let user = JSON.parse(localStorage.getItem(key))
                        if (user.loggedIn===true) {
                            user.loggedIn =false
                            localStorage.setItem(key, JSON.stringify(user))
                            userIsfound = false
                        }
                  }
                  }
                  }

                  function showProfileBtn () {
                    let loggedOutUsersArr =[]
                    for (let i = 0; i<localStorage.length; i++) {
                      let key = localStorage.key(i)
                      if (key.startsWith('user')) {
                        let user = JSON.parse(localStorage.getItem(key))
                        loggedOutUsersArr.push(user)
                    }
                  }

                  if (loggedOutUsersArr.every(user =>user.loggedIn===false)) {
                        profileBtnLoggedInClose.classList.add('profile_btn_loggedIn_close')
                        profileBtnLoggedOutClose.classList.remove('profile_btn_logged_out_close')
                        modalProfileMyProfileClose.classList.add('modal_profile_my_profile_close')
                      }
                  }


                    logOutBtn.addEventListener('click', event => {
                      logOut ()
                      showProfileBtn ()
                      digitalLibraryCardLogOut ()
                    })

                  window.addEventListener('load', event=> {
                    showProfileBtn ()
                  })

                  /*logOut*/

  ////_______________________*LOCAL_STORAGE________________________*/


/*profile*/

            /*adaptive_menu_BURGER*/
            const adaptiveMenuButton = document.querySelector('.adaptive_menu')
            const  modalNav = document.querySelector('.nav_container_adaptive')
            const  modalNavCross =document.querySelector ('.cross')

            adaptiveMenuButton.addEventListener('click', event =>{
                if (modalNav.classList.contains('close')) {
                    modalNav.classList.remove('close')
                }else {
                    modalNav.classList.add('close')
                }
            }
            )

            modalNavCross.addEventListener('click', event=> {
                if (modalNav.classList.contains('close')) {
                    modalNav.classList.remove('close')
                }else {
                    modalNav.classList.add('close')
                }
            }
            )
            /*/adaptive_menu_BURGER*/



/*________________________________SLIDER_____________________________*/
const button= document.querySelectorAll('.button');
const sliderBlock = document.querySelector('.slider_wrapper_1440px');

let position = 0;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', event => {
    if (i === 0) {
      position = 33.4;
    } else if (i === 1) {
      position = 0;
    } else if (i === 2) {
      position = -33.4;
    }
    sliderBlock.style.transform = 'translateX(' + position + '%)'
  });
}
/*/_______________________________SLIDER__________________________*/


/*__________________SEASONS_BOOKS_____________________*/

/*change_pages_favorites_season_books*/
const seasonBtns = document.querySelectorAll('.season_btn')
const winter = document.querySelector('.winter')
const spring = document.querySelector('.spring')
const summer = document.querySelector('.summer')
const autumn = document.querySelector('.autumn')

let seasons = ['winter', 'spring', 'summer', 'autumn']
let seasonBooksArr = [winter, spring, summer, autumn]

let seasonPageIsOpen = false
function OpenSeasonBooks () {
  for (let i=0; i<seasonBtns.length; i++) {
    if (seasonBtns[i].checked) {
      seasonBooksArr[i].classList.remove(seasons[i])
      seasonPageIsOpen = true
    }else { 
      seasonBooksArr[i].classList.add(seasons[i])
      seasonPageIsOpen = false
     }
    }
  }

seasonBtns.forEach(btn=> {
  btn.addEventListener('change', event =>{
    OpenSeasonBooks ()
  })
})
  OpenSeasonBooks ()

  /*/change_pages_favorites_season_books*/

  /*Btn_buy_book_log_Out*/
  const bookBtns = document.querySelectorAll('.book_btn')
  function openLogInWinBuyBtn () {
  let loggedOutUsersArr =[]
  for (let i = 0; i<localStorage.length; i++) {
    let key = localStorage.key(i)
    if (key.startsWith('user')) {
      let user = JSON.parse(localStorage.getItem(key))
      loggedOutUsersArr.push(user)
  }
  }
  if (loggedOutUsersArr.every(user=>user.loggedIn===false)) {
    modalProfileLogInclose.classList.remove('modal_profile_log_in_close');
    logInWinOpened=true
  }else {
    logInWinOpened= false
  }
  
 }

 bookBtns.forEach(btn=>{
  btn.addEventListener('click', event=> {
    openLogInWinBuyBtn ()
  })
 })



 /*/Btn_buy_book_log_Out*/

/*/__________________SEASONS_BOOKS_____________________*/