const CardButton = ({
  button,
  buttonAlignment,
  buttonText,
  buttonCaption,
  buttonCaptionColor,
  buttonLinkValue,
  buttonLinkTarget,
}: any) => {
  return (
    <div className='space-y-2 mx-3'>
      <div
        style={{ display: "flex", justifyContent: buttonAlignment }}
        className='mt-4'>
        <a
          href={buttonLinkValue}
          target={buttonLinkTarget}
          rel='noopener noreferrer'
          className='w-full'>
          <button
            style={{
              backgroundColor: button.mode === "filled" ? button.color : "",
              color:
                button.mode === "outline" ? button.color : button.label_color,
              borderWidth: 2,
              borderColor: button.mode === "outline" ? button.color : "",
              borderRadius: button.border_radius,
              paddingLeft: button.horizontal_padding,
              paddingRight: button.horizontal_padding,
              paddingTop: button.vertical_padding,
              paddingBottom: button.vertical_padding,
              width: button.full_width ? "100%" : button.size,
              fontSize: button.font.font_size,
              fontWeight: button.font.font_weight,
            }}>
            {buttonText}
          </button>
        </a>
      </div>
      <p
        style={{ textAlign: buttonAlignment, color: buttonCaptionColor }}
        className='min-h-5 text-xs'>
        {buttonCaption}
      </p>
    </div>
  );
};

export default CardButton;
