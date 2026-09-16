// Footer på alle slides: tittel, sidetall, «Presentert av» og Capgemini-logo.
// Monteres fra global-bottom.vue med <React is="Footer" :page :total />.
interface Props {
  page: number
  total: number
  title?: string
}

export default function Footer({ page, total, title = 'React Norway 2026 · mine favoritter' }: Props) {
  return (
    <footer className="rr-footer">
      <span className="rr-footer-title">{title}</span>
      <span className="rr-footer-right">
        <span className="rr-footer-page">
          {page} / {total}
        </span>
        <span className="rr-footer-presented">Presentert av</span>
        <img src="/capgemini-logo.svg" alt="Capgemini" className="rr-footer-logo" />
      </span>
    </footer>
  )
}
