function watchFootnoteScroll(updateNotes: Function) {
  setTimeout(() => {
    const contentBody = document.querySelector('.article-content');
    const citations = Array.from(
      contentBody
        ? contentBody.querySelectorAll(
            `p cite, blockquote:not(.is-style-large) cite`
          )
        : []
    );

    updateNotes(citations);
  }, 50);
}

export default watchFootnoteScroll;
