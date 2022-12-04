import './style.css'

export default function Header() {
  return (
    <>
      <header>
        <a href='/'>logo</a>
        <div className='gnb'>
          <a href='/'>menu1</a>
          <a href='/'>menu2</a>
          <a href='/'>menu3</a>
        </div>
      </header>
    </>
  )
}