// Lite rundt foredragsholderbilde oppe til høyre på innholdsslides.
// Rammen deler view-transition-name («speaker-photo») med SectionPhoto, så den glir dit ved slidebytte.
// Bildet ligger fast 25 % innzoomet i rammen, så zoomen skjer som en del av selve overgangen.
// Bruk i slides.md: <React is="SpeakerPhoto" src="/speakers/navn.jpg" alt="Navn" />
interface Props {
  src: string
  alt?: string
}

export default function SpeakerPhoto({ src, alt = '' }: Props) {
  return (
    <div className="rr-speaker-photo view-transition-speaker-photo">
      <img src={src} alt={alt} className="rr-speaker-photo-img" />
    </div>
  )
}
