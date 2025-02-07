const CardHeader = (props: any) => {
  const {
    title,
    titleCaption,
    textAlignment,
    titleTextColor,
    titleCaptionColor,
    titleFont,
    titleCaptionFont,
    columnStyle,
    primaryColor,
    secondaryColor,
  } = props;
  return (
    <div
      className='py-4'
      style={{
        backgroundColor: columnStyle === "style2" ? primaryColor : "",
        textAlign: textAlignment,
        color: columnStyle === "style2" ? secondaryColor : "",
      }}>
      <p
        style={{
          color: titleTextColor,
          fontSize: titleFont.font_size,
          fontWeight: titleFont.font_weight,
          fontStyle: titleFont.font_style,
        }}>
        {title}
      </p>
      <p
        style={{
          color: titleCaptionColor,
          fontSize: titleCaptionFont.font_size,
          fontWeight: titleCaptionFont.font_weight,
          fontStyle: titleCaptionFont.font_style,
        }}>
        {titleCaption}
      </p>
    </div>
  );
};

export default CardHeader;
