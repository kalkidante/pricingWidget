const CardPrice = (props: any) => {
  const {
    price,
    oldPrice,
    discount,
    priceAlign,
    priceColor,
    priceFont,
    oldPriceColor,
    oldPriceFont,
    discountTextColor,
    discountFont,
    priceCaptionColor,
    priceCaptionFont,
    priceCaption,
  } = props;

  const calculateDiscount = () => {
    if (!oldPrice?.enabled) return 0;
    const oldPriceValue = parseFloat(oldPrice.price);
    const newPriceValue = parseFloat(price.price);
    if (oldPriceValue === 0) return 0;
    return Math.round(((oldPriceValue - newPriceValue) / oldPriceValue) * 100);
  };

  const discountPercentage = calculateDiscount();

  const renderPeriod = (period: any) => {
    switch (period) {
      case "daily":
        return "day";
      case "weekly":
        return "week";
      case "monthly":
        return "month";
      case "quarterly":
        return "quarter";
      case "semi_annually":
        return "6 months";
      case "annually":
        return "year";
      default:
        return period.replace("ly", "");
    }
  };

  const renderPrice = () => {
    const {
      pricing_model,
      price: priceValue,
      currency,
      period,
      min_price,
      max_price,
      custom_price,
      unit,
    } = price;

    switch (pricing_model) {
      case "fixed":
        return `${currency}${priceValue} / ${renderPeriod(period)}`;
      case "subscription":
        return `${currency}${priceValue} / ${renderPeriod(period)}`;
      case "from":
        return `${currency}${priceValue}`;
      case "range":
        return `${currency}${min_price} - ${currency}${max_price}`;
      case "per":
        return `${currency}${priceValue} / ${unit}`;
      case "free":
        return "Free";
      case "custom":
        return custom_price;
      default:
        return `${currency}${priceValue} / ${renderPeriod(period)}`;
    }
  };

  const renderOldPrice = () => {
    if (!oldPrice?.enabled) return null;

    if (price.pricing_model === "custom") {
      return oldPrice.custom_price;
    }

    if (price.pricing_model === "range") {
      return `${price.currency}${oldPrice.min_price} - ${price.currency}${oldPrice.max_price}`;
    }

    if (price.pricing_model === "per") {
      return `${price.currency}${oldPrice.price} / ${price.unit}`;
    }

    if (price.pricing_model === "from") {
      return `Starting at ${price.currency}${oldPrice.price}`;
    }

    return `${price.currency}${oldPrice.price} / ${renderPeriod(price.period)}`;
  };

  return (
    <div className='space-y-3.5 py-6' style={{ textAlign: priceAlign }}>
      <div>
        {oldPrice?.enabled && (
          <div
            style={{
              display: price.pricing_model === "free" ? "none" : "block",
              color: oldPriceColor,
              fontSize: oldPriceFont?.font_size,
              fontWeight: oldPriceFont?.font_weight,
              fontStyle: oldPriceFont?.font_style,
              textDecoration: "line-through",
            }}>
            {renderOldPrice()}
          </div>
        )}
      </div>

      <div
        style={{
          color: priceColor,
          fontSize: priceFont?.font_size,
          fontWeight: priceFont?.font_weight,
          fontStyle: priceFont?.font_style,
        }}>
        {renderPrice()}
      </div>

      <div>
        {discount?.enabled && (
          <div
            style={{
              color: discountTextColor,
              fontSize: discountFont?.font_size,
              fontWeight: discountFont?.font_weight,
              fontStyle: discountFont?.font_style,
            }}>
            {discount.customLabel || `ON SALE - SAVE ${discountPercentage}%`}
          </div>
        )}
      </div>

      <div
        style={{
          color: priceCaptionColor,
          fontSize: priceCaptionFont?.font_size,
          fontWeight: priceCaptionFont?.font_weight,
          fontStyle: priceCaptionFont?.font_style,
        }}>
        {priceCaption}
      </div>
    </div>
  );
};

export default CardPrice;
