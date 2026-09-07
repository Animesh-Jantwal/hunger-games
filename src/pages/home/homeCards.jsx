import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import CropIcon from "@mui/icons-material/Crop";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ScaleIcon from "@mui/icons-material/Scale";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LabelIcon from "@mui/icons-material/Label";
import home_questions from "../../assets/home_questions.svg";
import home_logos from "../../assets/home_logos.svg";

const cards = [
  {
    title: "home.game_selector.cards.questions.title",
    desc: "home.game_selector.cards.questions.description",
    link: "/questions",
    image: home_questions,
  },
  {
    title: "home.game_selector.cards.logos.title",
    desc: "home.game_selector.cards.logos.description",
    link: "/logos/deep-search",
    image: home_logos,
  },
  {
    title: "home.game_selector.cards.green_score.title",
    desc: "home.game_selector.cards.green_score.description",
    link: "/green-score",
    image:
      "https://static.openfoodfacts.org/images/attributes/dist/green-score-a.svg",
  },
  {
    title: "home.game_selector.cards.create_products.title",
    desc: "home.game_selector.cards.create_products.description",
    href: "https://prices.openfoodfacts.org/experiments/create-off-product",
    Icon: AddShoppingCartIcon,
  },
  {
    title: "home.game_selector.cards.validate_prices.title",
    desc: "home.game_selector.cards.validate_prices.description",
    href: "https://prices.openfoodfacts.org/prices/add/validate",
    Icon: PriceCheckIcon,
  },
  {
    title: "home.game_selector.cards.nutrition.title",
    desc: "home.game_selector.cards.nutrition.description",
    link: "/nutrition",
    Icon: RestaurantMenuIcon,
  },
  {
    title: "home.game_selector.cards.ingredient_spellcheck.title",
    desc: "home.game_selector.cards.ingredient_spellcheck.description",
    link: "/ingredient-spellcheck",
    Icon: SpellcheckIcon,
  },
  {
    title: "home.game_selector.cards.ingredient_detection.title",
    desc: "home.game_selector.cards.ingredient_detection.description",
    link: "/ingredient-detection",
    Icon: CropIcon,
  },
  {
    title: "home.game_selector.cards.packaging.title",
    desc: "home.game_selector.cards.packaging.description",
    link: "/questions?type=packaging",
    Icon: Inventory2Icon,
  },
  {
    title: "home.game_selector.cards.weights.title",
    desc: "home.game_selector.cards.weights.description",
    link: "/questions?type=product_weight",
    Icon: ScaleIcon,
  },
  {
    title: "home.game_selector.cards.brands.title",
    desc: "home.game_selector.cards.brands.description",
    link: "/questions?type=brand",
    Icon: StorefrontIcon,
  },
  {
    title: "home.game_selector.cards.labels.title",
    desc: "home.game_selector.cards.labels.description",
    link: "/questions?type=label",
    Icon: LabelIcon,
  },
];

const HomeCards = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 3,
        maxWidth: 1500,
        mx: "auto",
        px: 2,
        marginBottom: "30px",
      }}
    >
      {cards.map((cardInfo) => (
        <Card sx={{ width: "100%", height: 300 }} key={cardInfo.title}>
          <CardActionArea
            {...(cardInfo.href
              ? {
                  component: "a",
                  href: cardInfo.href,
                  target: "_blank",
                  rel: "noreferrer",
                }
              : { component: Link, to: cardInfo.link })}
          >
            {cardInfo.Icon ? (
              <Box
                sx={{
                  height: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f6f3f0",
                  borderRadius: "16px",
                }}
              >
                <cardInfo.Icon
                  sx={{ fontSize: 96, color: "#85746c" }}
                  aria-hidden
                />
              </Box>
            ) : (
              <CardMedia
                component="img"
                height="200"
                image={cardInfo.image}
                alt={t(cardInfo.title)}
                sx={{ objectFit: "contain" }}
              />
            )}
            <CardContent>
              <Typography variant="h5" component="div">
                {t(cardInfo.title)}
              </Typography>
              <Typography
                gutterBottom
                variant="p"
                component="div"
                sx={{
                  fontSize: 14,
                }}
              >
                {t(cardInfo.desc)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default HomeCards;
