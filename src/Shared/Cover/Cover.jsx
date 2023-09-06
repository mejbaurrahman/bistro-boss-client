import { Parallax } from 'react-parallax';
export default function Cover({img, title}) {
  return (
    <Parallax
    blur={{ min: -30, max: 30 }}
    bgImage={img}
    bgImageAlt="our menu"
    strength={-200}
>
<div className="hero h-[600px]" >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur accusantium nam vero, assumenda fugiat debitis eos impedit tenetur possimus aperiam magnam, alias, placeat minus repellendus!</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</Parallax>
    
  )
}
