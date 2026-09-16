// Stort rundt foredragsholderbilde til høyre for tittelen på seksjonsslides (layout rock-section).
// Samme view-transition-name som SpeakerPhoto, så det krymper inn i hjørnet på neste slide.
interface Props {
  src: string
  alt?: string
}

export default function SectionPhoto({ src, alt = '' }: Props) {
  return <img src={src} alt={alt} className="rr-section-photo view-transition-speaker-photo" />
}
