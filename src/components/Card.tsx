import CardButton from "./CardButton";
import CardFeatures from "./CardFeatures";
import CardHeader from "./CardHeader";
import CardPrice from "./CardPrice";

const Card = (props: any) => {
  const {
    data,
    showPicture,
    pictureAspectRatio,
    showTitle,
    textAlignment,
    titleTextColor,
    titleCaptionColor,
    titleFont,
    titleCaptionFont,
    showFeatures,
    secondaryColor,
    featuresStyle,
    featuresAlign,
    featuresFontSize,
    featuresTextColor,
    featuresIconColor,
    showPrice,
    priceAlign,
    priceColor,
    priceFont,
    oldPriceColor,
    oldPriceFont,
    discountTextColor,
    discountFont,
    priceCaptionColor,
    priceCaptionFont,
    showButton,
    button,
    buttonAlignment,
    columnStyle,
    primaryColor,
    columnCornerRadius,
    buttonCaptionColor,
  } = props;
  return (
    <div
      style={{
        borderWidth: 0.5,
        borderColor: primaryColor,
        borderRadius: columnCornerRadius,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: ["style1", "style2"].includes(columnStyle)
          ? "#F9FAFB"
          : columnStyle === "style3"
          ? primaryColor
          : "",
      }}
      className='pb-6 space-y-2 px-2'>
      {showPicture && (
        <div
          className='w-full overflow-hidden'
          style={{
            aspectRatio: pictureAspectRatio,
          }}>
          <img
            className='w-full h-full object-cover'
            src={data.picture}
            alt=''
          />
        </div>
      )}

      {showTitle && (
        <CardHeader
          title={data.title}
          titleCaption={data.title_caption}
          textAlignment={textAlignment}
          titleTextColor={titleTextColor}
          titleCaptionColor={titleCaptionColor}
          titleFont={titleFont}
          titleCaptionFont={titleCaptionFont}
          columnStyle={columnStyle}
          secondaryColor={secondaryColor}
          primaryColor={primaryColor}
        />
      )}
      {showFeatures && (
        <CardFeatures
          features={data.features}
          featuresStyle={featuresStyle}
          featuresAlign={featuresAlign}
          featuresFontSize={featuresFontSize}
          featuresTextColor={featuresTextColor}
          featuresIconColor={featuresIconColor}
          secondaryColor={secondaryColor}
          primaryColor={primaryColor}
          columnStyle={columnStyle}
        />
      )}

      {showPrice && (
        <CardPrice
          price={data.price}
          oldPrice={data.old_price}
          discount={data.discount}
          priceAlign={priceAlign}
          priceColor={priceColor}
          priceFont={priceFont}
          oldPriceColor={oldPriceColor}
          oldPriceFont={oldPriceFont}
          discountTextColor={discountTextColor}
          discountFont={discountFont}
          priceCaptionColor={priceCaptionColor}
          priceCaptionFont={priceCaptionFont}
          priceCaption={data.price_caption}
        />
      )}

      {showButton && (
        <CardButton
          button={button}
          buttonLinkValue={data.button_link.value}
          buttonLinkTarget={data.button_link.target}
          buttonAlignment={buttonAlignment}
          buttonText={data.button_text}
          buttonCaption={data.button_caption}
          buttonCaptionColor={buttonCaptionColor}
        />
      )}
    </div>
  );
};

export default Card;
