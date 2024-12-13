function Article() {
    const name = 'Udin React'
    const titles = ['React', 'Vue', 'Angular']

  return (
    <div>
          <div>{titles.map((title) => {
              return <>
              <div>{title}</div>
                  <div>{title}</div>
              </>
            })}
          </div>
          <div>{ name }</div>
    </div>
  )
}

export default Article;