import React from 'react'
import { Link } from 'gatsby'

export const Header = () => (
  <header className="header" role="banner">
    <div className="container-fluid d-flex align-items-center justify-content-between">
      <Logo />
      <nav className="nav d-flex align-items-center mt-auto" role="navigation">
        <Dribbble link={"https://dribbble.com/edmundojr"} />
        <Instagram link={"https://instagram.com/manfromanotherland"} />
        <GitHub link={"https://github.com/edmundojr"} />
        <Twitter link={"https://twitter.com/edmundojr_"} />
      </nav>
    </div>
  </header>
)

const Logo = () => (
  <Link className="logo d-inline-flex justify-content-center" to="/">
    <span className="sr-only">Ed</span>
    <svg width="44px" height="25px" viewBox="0 0 44 25">
      <title>Edmundo Santos, Designer</title>
      <path d="m7 10h11v5h-11v3h11v7h-18v-25h18v7h-11zm14-10h10.596559c3.4302141 0 6.2890548 1.15549158 8.7403355 3.63739954 2.4305573 2.46291632 3.6631055 5.44260526 3.6631055 8.85310466 0 3.4364879-1.2325482 6.4281716-3.6631055 8.8910879-2.4414125 2.4719124-5.3002531 3.6184079-8.7403355 3.6184079h-10.596559zm8.2821402 17.9870389c.3241834.006979.6483668.0129611.9715078.0129611 1.6271714 0 3.4940926-.1256231 5.0618477-1.6251246 1.1028491-1.0538385 1.6855453-2.3888335 1.6845029-3.8614158 0-1.3918245-.5347463-2.67397804-1.5865182-3.80658024-1.0090339-1.13260219-2.4152185-1.70687936-4.1779006-1.70687936h-3.2355798v10.9870389z" />
    </svg>
  </Link>
)

const Dribbble = ({link}) => (
  <a
    className="nav__item d-inline-flex justify-content-center"
    href={link}
  >
    <span className="sr-only">Dribbble</span>
    <svg width="24" height="24">
      <title>Dribbble</title>
      <path d="M16.989 20.645c-.1-.592-.624-3.475-1.913-7.014 3.172-.507 5.918.363 6.121.429a9.824 9.824 0 0 1-4.208 6.585zM11.5 22.322a9.783 9.783 0 0 1-6.258-2.252c.13.106.22.172.22.172s1.883-4.105 7.708-6.135c.022-.008.044-.013.066-.02 1.382 3.59 1.952 6.597 2.098 7.456a9.79 9.79 0 0 1-3.834.779zm-9.823-9.823c0-.104.006-.207.008-.31.175.005 5.027.114 10.084-1.399.281.55.55 1.112.796 1.67-.13.035-.258.074-.386.118-5.3 1.712-7.989 6.48-7.989 6.48l.004.005a9.783 9.783 0 0 1-2.517-6.564zM7.31 3.62a58.741 58.741 0 0 1 3.647 5.658c-4.716 1.253-8.81 1.203-9.068 1.2a9.824 9.824 0 0 1 5.42-6.858zm1.838-.654l-.002.002-.03.006.032-.008zm8.839 2.166c-.025.037-1.423 2.166-5.131 3.555a49.9 49.9 0 0 0-3.67-5.73A9.822 9.822 0 0 1 11.5 2.68c2.485 0 4.756.928 6.486 2.452zm3.332 7.271c-.142-.031-3.466-.746-6.84-.322-.07-.168-.14-.337-.213-.506a29.517 29.517 0 0 0-.653-1.425c3.879-1.583 5.453-3.86 5.472-3.886a9.782 9.782 0 0 1 2.234 6.139zm1.448-2.216a11.54 11.54 0 0 0-.672-2.163 11.493 11.493 0 0 0-4.165-5.057 11.465 11.465 0 0 0-1.953-1.061 11.522 11.522 0 0 0-6.793-.67c-.738.15-1.466.378-2.161.67a11.53 11.53 0 0 0-6.79 8.28 11.605 11.605 0 0 0 0 4.632c.151.738.377 1.466.672 2.16.286.681.645 1.34 1.06 1.955.411.608.883 1.179 1.402 1.701a11.522 11.522 0 0 0 3.655 2.462c.696.295 1.424.52 2.162.67.757.157 1.536.235 2.317.235.779 0 1.558-.078 2.315-.235a11.459 11.459 0 0 0 4.114-1.73c.61-.412 1.182-.883 1.703-1.402.519-.522.992-1.093 1.402-1.701a11.483 11.483 0 0 0 1.732-4.115 11.635 11.635 0 0 0 0-4.631z" />
    </svg>
  </a>
)

const Instagram = ({link}) => (
  <a
    className="nav__item d-inline-flex justify-content-center"
    href={link}
  >
    <span className="sr-only">Instagram</span>
    <svg width="24" height="24">
      <title>Instagram</title>
      <path d="M12 0c3.259 0 3.668.014 4.948.072 1.277.058 2.15.261 2.912.558.79.307 1.459.717 2.126 1.384A5.883 5.883 0 0 1 23.37 4.14c.297.763.5 1.635.558 2.912C23.986 8.332 24 8.741 24 12c0 3.259-.014 3.668-.072 4.948-.058 1.277-.261 2.15-.558 2.912a5.883 5.883 0 0 1-1.384 2.126 5.883 5.883 0 0 1-2.126 1.384c-.763.297-1.635.5-2.912.558-1.28.058-1.689.072-4.948.072-3.259 0-3.668-.014-4.948-.072-1.277-.058-2.15-.261-2.912-.558a5.883 5.883 0 0 1-2.126-1.384A5.882 5.882 0 0 1 .63 19.86c-.297-.763-.5-1.635-.558-2.912C.014 15.668 0 15.259 0 12c0-3.259.014-3.668.072-4.948C.13 5.775.333 4.902.63 4.14a5.882 5.882 0 0 1 1.384-2.126A5.882 5.882 0 0 1 4.14.63C4.903.333 5.775.13 7.052.072 8.332.014 8.741 0 12 0zm0 2.162c-3.204 0-3.584.012-4.849.07-1.17.053-1.805.249-2.228.413-.56.218-.96.478-1.38.898-.42.42-.68.82-.898 1.38-.164.423-.36 1.058-.413 2.228-.058 1.265-.07 1.645-.07 4.849s.012 3.584.07 4.849c.053 1.17.249 1.805.413 2.228.218.56.478.96.898 1.38.42.42.82.68 1.38.898.423.164 1.058.36 2.228.413 1.265.058 1.645.07 4.849.07s3.584-.012 4.849-.07c1.17-.053 1.805-.249 2.228-.413.56-.218.96-.478 1.38-.898.42-.42.68-.82.898-1.38.164-.423.36-1.058.413-2.228.058-1.265.07-1.645.07-4.849s-.012-3.584-.07-4.849c-.053-1.17-.249-1.805-.413-2.228a3.717 3.717 0 0 0-.898-1.38c-.42-.42-.82-.68-1.38-.898-.423-.164-1.058-.36-2.228-.413-1.265-.058-1.645-.07-4.849-.07zm0 3.676a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm7.846-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
    </svg>
  </a>
)

const GitHub = ({link}) => (
  <a
    className="nav__item d-inline-flex justify-content-center"
    href={link}
  >
    <span className="sr-only">GitHub</span>
    <svg width="24" height="24">
      <title>GitHub</title>
      <path d="M12 0C5.372 0 0 5.394 0 12.048c0 5.322 3.438 9.838 8.207 11.431.6.11.82-.261.82-.58 0-.286-.011-1.044-.017-2.05-3.339.729-4.043-1.614-4.043-1.614-.545-1.392-1.332-1.762-1.332-1.762-1.09-.748.083-.733.083-.733 1.203.085 1.837 1.242 1.837 1.242 1.071 1.84 2.809 1.31 3.493 1 .109-.778.42-1.309.762-1.61-2.665-.304-5.466-1.337-5.466-5.954 0-1.315.467-2.39 1.235-3.233-.123-.305-.535-1.53.117-3.188 0 0 1.008-.324 3.3 1.235.958-.268 1.984-.401 3.005-.406a11.49 11.49 0 0 1 3.004.406c2.29-1.559 3.297-1.235 3.297-1.235.654 1.659.242 2.883.119 3.188.77.842 1.233 1.918 1.233 3.233 0 4.628-2.805 5.647-5.478 5.945.43.372.814 1.107.814 2.23 0 1.611-.015 2.91-.015 3.306 0 .322.216.697.825.579a12.047 12.047 0 0 0 8.2-11.43C24 5.394 18.627 0 12 0" />
    </svg>
  </a>
)

const Twitter = ({link}) => (
  <a
    className="nav__item d-inline-flex justify-content-center"
    href={link}
  >
    <span className="sr-only">Twitter</span>
    <svg width="24" height="24">
      <title>Twitter</title>
      <path d="M24 4.368a9.617 9.617 0 0 1-2.827.794 5.038 5.038 0 0 0 2.165-2.792 9.698 9.698 0 0 1-3.129 1.223A4.856 4.856 0 0 0 16.616 2c-2.718 0-4.922 2.26-4.922 5.049 0 .396.042.78.126 1.15-4.092-.211-7.72-2.22-10.15-5.277a5.14 5.14 0 0 0-.666 2.54c0 1.751.87 3.297 2.19 4.203a4.834 4.834 0 0 1-2.23-.63v.062c0 2.447 1.697 4.488 3.951 4.95a4.695 4.695 0 0 1-1.297.178c-.317 0-.627-.03-.927-.09.626 2.006 2.444 3.466 4.599 3.505A9.722 9.722 0 0 1 0 19.733 13.71 13.71 0 0 0 7.548 22c9.058 0 14.01-7.692 14.01-14.365 0-.22-.005-.439-.013-.654.962-.712 1.797-1.6 2.455-2.613" />
    </svg>
  </a>
)
