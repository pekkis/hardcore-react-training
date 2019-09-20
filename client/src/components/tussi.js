if (isSingleTextParagraph(children)) {
  const iframe = children[0][0].match(iframeRegex);
  if (iframe !== null) {
    const attributes = [...iframe[1].matchAll(/(\w+)="([^"]+)"/g)];
    attributes.map(item => (opts[item[1]] = item[2]));

    const opts = attributes.reduce((a, item) => {
      return {
        ...a,
        [item[1]]: item[2]
      };
    }, {});

    return <Iframe {...opts}></Iframe>;
  }
}
return <Text>{children}</Text>;
