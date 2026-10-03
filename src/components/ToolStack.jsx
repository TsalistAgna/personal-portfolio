const tools = [
  { name: 'Figma', detail: 'Interfaces & prototypes' },
  { name: 'Sketch', detail: 'Exploring visual ideas' },
  { name: 'SwiftUI', detail: 'Native app experiences' },
  { name: 'React', detail: 'Interactive web products' },
  { name: 'JavaScript', detail: 'Bringing ideas to life' },
  { name: 'WordPress', detail: 'Websites & content' },
]

export default function ToolStack() {
  return <section className="tool-stack" aria-labelledby="stack-title">
    <div className="stack-heading">
      <div><span className="eyebrow">MY STACK</span><h2 id="stack-title">Ideas meet the toolbox<span>.</span></h2><p>The tools I use to explore, design, and build.</p></div>
      <span className="stack-process"><span aria-hidden="true">✳</span> Project management<br />keeps it all moving.</span>
    </div>
    <ul className="stack-grid">{tools.map(tool => <li key={tool.name} className="stack-card">
      <div><h3>{tool.name}</h3><p>{tool.detail}</p></div>
    </li>)}</ul>
  </section>
}
