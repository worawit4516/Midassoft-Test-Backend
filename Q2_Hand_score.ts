function getHandScore(input: string): number {
  //Set variable
  let hands = input;
  let cards: string[] = [];
  cards = hands.split(" ");
  console.log(cards);

  enum RankPoint {
    Jack = 10,
    Queen = 10,
    King = 10,
    Ace = 11,
  }

  enum Rank {
    Jack = "J",
    Queen = "Q",
    King = "K",
    Ace = "A",
  }

  enum Suit {
    Hearts = "H",
    Clubs = "C",
    Diamonds = "D",
    Spades = "S",
  }

  let SpadesScore = 0;
  let ClubsScore = 0;
  let HeartsScore = 0;
  let DiamondsScore = 0;

  //Get Score of each Cards
  for (const card of cards) {
    let suit = card.slice(0, 1);
    let point = card.slice(1);

    //Check Rank Score of each Cards
    function checkRankPoint(point: any) {
      switch (point) {
        case Rank.Ace:
          return RankPoint.Ace;
        case Rank.Jack:
          return RankPoint.Jack;
        case Rank.King:
          return RankPoint.King;
        case Rank.Queen:
          return RankPoint.Queen;

        default:
          return Number(point);
      }
    }

    // Increase score of each suit
    switch (suit) {
      case Suit.Clubs:
        ClubsScore += checkRankPoint(point);
        break;
      case Suit.Diamonds:
        DiamondsScore += checkRankPoint(point);
        break;
      case Suit.Hearts:
        HeartsScore += checkRankPoint(point);
        break;
      case Suit.Spades:
        SpadesScore += checkRankPoint(point);
        break;
    }
  }

  //Calulate total score
  function GetTotalScore() {
    let totalScore = {
      Clubs: ClubsScore,
      Diamonds: DiamondsScore,
      Hearts: HeartsScore,
      Spades: SpadesScore,
    };

    const convertScore = Object.values(totalScore);
    const maxScore = Math.max(...convertScore);
    console.log(`Your score is : ${maxScore}`);
    return maxScore;
  }
  return GetTotalScore();
}

// Example
getHandScore("S8 S10 CA");
getHandScore("C8 H5 D2");
getHandScore("S10 S10 S10");
getHandScore("SK SQ SJ");
