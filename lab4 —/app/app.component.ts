import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'lab4-online-store';

  productItem: any[];

  constructor(){
    this.productItem = [
      {
        name: 'Pride and Prejudice: Deluxe Edition (Illustrated) - Golden Classics',
        image: 'https://m.media-amazon.com/images/I/51B4F7txsWL.jpg',
        description: 'About the Author\n' +
        'Jane Austen (16 December 1775 - 18 July 1817) was an English novelist. She wrote many books of romantic fiction about the gentry. Her works\n' +
        'made her one of the most famous and beloved writers in English literature. She is one of the great masters of the English novel. Austens works \n' +
        'criticized sentimental novels in the late 18th century, and are part of the change to nineteenth- realism. She wrote about typical people in\n' +
        'everyday life. This gave the English novel its first distinctly modern character. Austens stories are often comic, but they also show how women\n' +
        'depended on marriage for social standing and economic security.',
        rating: 4.7,
        link: 'https://www.amazon.com/Pride-Prejudice-Deluxe-Illustrated-Classics-ebook/dp/B08NVZNLRX/ref=sr_1_5?crid=1SBHTT1ML3GZ5&dchild=1&keywords=pride+and+prejudice+book&qid=1614135174&sprefix=pride+and+prejudice+%2Caps%2C451&sr=8-5'
      },
      {
        name: 'Anna Karenina (Wordsworth Classics)',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41tAv3Df-IL._SX324_BO1,204,203,200_.jpg',
        description: `Anna Karenina is one of the most loved and memorable heroines of literature. Her\n` +
          'overwhelming charm dominates a novel of unparalleled richness and density. Tolstoy considered\n' +
          'this book to be his first real attempt at a novel form, and it addresses the very nature of society\n' +
          'at all levels,- of destiny, death, human relationships and the irreconcilable contradictions of\n' +
          'existence. It ends tragically, and there is much that evokes despair, yet set beside this is an\n' +
          'abounding joy in life s many ephemeral pleasures, and a profusion of comic relief.',
        rating: 4.7,
        link: 'https://www.amazon.com/Anna-Karenina-Wordsworth-Classics-Tolstoy/dp/1853262714/ref=sr_1_1?crid=6F6TD965VV08&dchild=1&keywords=anna+karenina+book&qid=1614135784&sprefix=anna+karenina+boo%2Caps%2C379&sr=8-1'
      },
      {
        name: ' Margaret Mitchell s Gone with the Wind',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51z4WfBJdnL._SX319_BO1,204,203,200_.jpg',
        description: 'Exquisitely imagined, deeply researched . . . brings to the foreground the most\n' +
          'enigmatic and fascinating figure in Gone with the Wind. This is a brave work of literary\n' +
          'empathy by a writer at the height of his powers, who demonstrates a magisterial\n' +
          'understanding of the period, its clashing cultures, and its heartbreaking crises.\n' +
          'Geraldine Brooks, author of March',
        rating: 4.5,
        link: 'https://www.amazon.com/Ruths-Journey-Novel-Margaret-Mitchells/dp/1451643543/ref=sr_1_2?crid=3KI6DGBU18Z73&dchild=1&keywords=gone+with+the+wind+book&qid=1614136041&sprefix=gone+%2Caps%2C356&sr=8-2'
      },
      {
        name: 'Martin Eden (Penguin American Library)',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41MYrpY9xXL._SX325_BO1,204,203,200_.jpg',
        description: 'Jack Londons semiautobiographical critique of individualism that touches on\n' +
          'contemporary issues like socialism and mental illness, soon to be a major motion picture\n' +
          'The semiautobiographical Martin Eden is the most vital and original character Jack London ever\n' +
          'created. Set in San Francisco, this is the story of Martin Eden, an impoverished seaman who\n' +
          'pursues, obsessively and aggressively, dreams of education and literary fame. London,\n'+
          'dissatisfied with the rewards of his own success, intended Martin Eden as an attack on\n'+
          'individualism and a criticism of ambition; however, much of its status as a classic has been\n'+
          'conferred by admirers of its ambitious protagonist.',
        rating: 4.6,
        link: 'https://www.amazon.com/Martin-Eden-Penguin-American-Library/dp/0140187723/ref=sr_1_1?crid=2ZWMYAI06PZH0&dchild=1&keywords=martin+eden+book&qid=1614136419&sprefix=martin+ede%2Caps%2C619&sr=8-1'
      },
      {
        name: 'Arch of Triumph: A Novel',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51lqz9y6xvL._SX330_BO1,204,203,200_.jpg',
        description: 'The evocative story of a man without a country, Arch of Triumph is a World War II–era\n' +
          'classic from the author of All Quiet on the Western Front.\n'+
          'It is 1939. Despite a law banning him from performing surgery, Ravic—a German doctor and\n'+
          'refugee living in Paris—has been treating some of the city’s most elite citizens for two years on\n'+
          'the behalf of two less-than-skillful French physicians.',
        rating: 4.7,
        link: 'https://www.amazon.com/Arch-Triumph-Erich-Maria-Remarque/dp/0449912450/ref=sr_1_1?crid=37S41BEJUSF89&dchild=1&keywords=arch+of+triumph+book&qid=1614136654&sprefix=arch+of+%2Caps%2C340&sr=8-1'
      },
      {
        name: 'The Catcher in the Rye ',
        image: 'https://images-na.ssl-images-amazon.com/images/I/518dVCGFuhL._SX323_BO1,204,203,200_.jpg',
        description: 'Anyone who has read J.D. Salinger s New Yorker stories--particularly A Perfect Day for\n' +
          'Bananafish, Uncle Wiggily in Connecticut, The Laughing Man, and For Esme With Love and\n' +
          'Squalor--will not be surprised by the fact that his first novel is full of children. The hero-narrator\n' +
          'of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden\n' +
          'Caulfield.' ,
    
        rating: 4.5,
        link: 'https://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769177/ref=sr_1_1?crid=14CRQIJ00TZT0&dchild=1&keywords=the+catcher+in+the+rye&qid=1614137803&sprefix=the+ca%2Caps%2C345&sr=8-1'
      },
      {
        name: 'Rich Dad Poor Dad ',
        image: 'https://m.media-amazon.com/images/I/51NuMV9SJ8L.jpg',
        description: 'The #1 personal finance book of all time... translated into dozens of languages and sold around the world.\n' +
          'Rich Dad Poor Dad is Roberts story of growing up with two dads - his real father and the father of\n' +
          'his best friend, his rich dad - and the ways in which both men shaped his thoughts about money and\n'+
          'investing. The book explodes the myth that you need to earn a high income to be rich and explains\n'+
          'the difference between working for money and having your money work for you. ',
        rating: 4.3,
        link: 'https://www.amazon.com/Rich-Dad-Poor-Anniversary-Middle/dp/B07QPQ8WBL/ref=sr_1_1?crid=JVA212ZQEI8Q&dchild=1&keywords=rich+dad+poor+dad+book&qid=1614137012&sprefix=rich+%2Caps%2C355&sr=8-1'
      },
      {
        name: 'Think and Grow Rich',
        image: 'https://m.media-amazon.com/images/I/518M82X5WtL.jpg',
        description: 'Think and Grow Rich - more than 80 million copies sold!\n' +
          'This audio edition of Napoleon Hill\'s classic Think and Grow Rich is recorded from an exact\n' +
          'reproduction of Napoleon Hill\'s personal copy of the first edition, the only original version\n' +
          'recommended by The Napoleon Hill Foundation, originally printed in March of 1937.\n' ,
        rating: 4.5,
        link: 'https://www.amazon.com/Think-Grow-Rich-Publication-Foundation/dp/193787950X/ref=sr_1_3?crid=27F7DMAWCOOWJ&dchild=1&keywords=think+and+grow+rich&qid=1614137855&sprefix=thin%2Caps%2C352&sr=8-3'
      },
      {
        name: 'Discover Your Destiny With The Monk Who Sold His Ferrari',
        image: 'https://m.media-amazon.com/images/I/51S4a+Y21UL.jpg',
        description: 'Like his megaselling The Monk Who Sold His Ferrari—the book that started it all—Discover Your\n' +
          'Destiny with The Monk Who Sold His Ferrari delivers another life-changing fable to help readers\n'+
          'see the world through a completely new set of eyes. This latest guide offers more of the inspiring\n'+
          'but highly practical wisdom of the now famous Julian Mantle, the superstar lawyer who traded\n'+
          'his jet-set lifestyle and prized Ferrari for enlightenment and fulfillment.',
          rating: 4.3,
        link: 'https://www.amazon.com/Discover-Your-Destiny-Monk-Ferrari-ebook/dp/B0055DLXH6/ref=sr_1_1?crid=ROZVNT9MZ5H8&dchild=1&keywords=discover+your+destiny+with+the+monk+who+sold+his+ferrari&qid=1614137420&sprefix=discover+your+destiny+with%2Caudible%2C333&sr=8-1'
      },
      {
        name: 'The Richest Man In Babylon',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51V0RSL8A5L._SX331_BO1,204,203,200_.jpg',
        description: 'The Richest Man in Babylon, based on “Babylonian parables”, has been hailed as the greatest\n' +
          'of all inspirational works on the subject of thrift, financial planning, and personal wealth.  In simple language, these fascinating and informative stories set you on a sure path to prosperity and its accompanying joys.  A celebrated bestseller, it offers an understanding and a solution to your personal financial problem.  Revealed inside are the secrets to acquiring money, keeping money, and making money earn more money.\n' ,
        rating: 4.4,
        link: 'https://www.amazon.com/Richest-Man-Babylon-Magic-Story/dp/1939438632/ref=sr_1_1?crid=1U299FZE78Z3Z&dchild=1&keywords=the+richest+man+in+babylon+book&qid=1614137625&sprefix=the+richest+man+in+babylon+%2Caps%2C378&sr=8-1'
      }
    ];
  }
  share(product: string) {
    window.open(`https://t.me/share/url?url=${product.link}`);
  }
}
