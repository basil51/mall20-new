import React from 'react';

class Start extends React.Component {
  render() {
    return (
        <div className="container">
        <div className="product-list-service d-flex flex-wrap flex-justify-center mb-4">
        <h4>Products</h4>
        <div className="ml-auto d-flex flex-wrap flex-justify-center">
            <div className="list-sort-as d-flex flex-align-center">
                <span className="mr-2">Sort as: </span>
                <div className="split-button small">
                    <button className="button bg-transparent current-sort text-bold">Discount</button>
                    <button className="split dropdown-toggle bg-transparent"></button>
                    <ul id="product-list-sort" className="d-menu" data-role="dropdown">
                        <li><a href="#" data-sort-col="sales" data-sort-dir="desc">Best selling</a></li>
                        <li><a href="#" data-sort-col="discount" data-sort-dir="desc">Discount</a></li>
                        <li><a href="#" data-sort-col="product-title" data-sort-dir="asc">Name A-Z</a></li>
                        <li><a href="#" data-sort-col="product-title" data-sort-dir="desc">Name Z-A</a></li>
                        <li><a href="#" data-sort-col="current-price" data-sort-dir="asc">Price Low to High</a></li>
                        <li><a href="#" data-sort-col="current-price" data-sort-dir="desc">Price High to Low</a></li>
                    </ul>
                </div>
            </div>

            <div className="list-view-as d-flex flex-align-center ml-4">
                <span className="mr-2">View as: </span>
                <div data-role="buttongroup">
                    <button className="button small" data-view="list"><span className="mif-list"></span></button>
                    <button className="button active small" data-view="tiles"><span className="mif-apps"></span></button>
                </div>
            </div>
        </div>
    </div>

    <ul data-role="list" className="product-list"
        data-show-search="true"
        data-show-pagination="true"
        data-show-items-steps="true"
        data-items="12"
        data-items-steps="all, 12, 24"
        data-cls-list-pagination="mt-4 d-flex flex-justify-center"
        data-cls-list-top="row"
        data-cls-search="cell-sm-9"
        data-cls-items-count="cell-sm-3"
        data-list-items-count-title="<span className='mif-eye'>"
        data-list-search-title="<span className='mif-search'>"
        data-sort-class="discount"
        data-sort-dir="desc"
    >
        <li className="product-list-item">
            <div className="sales" data-format="int">4</div>
            <div className="product-image">
                <img src="images/product_1.png" />
            </div>
            <div className="product-title">Back Athletic Sport Top</div>
            <div className="product-price"><span className="current-price" data-format="money">$480.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">1</div>
            <div className="discount" data-format="int">60</div>
            <div className="product-image">
                <img src="images/product_2.png" />
                <div className="badge inside bg-red fg-white">-60%</div>
                <div data-role="countdown" data-days="3" data-animate="slide"></div>
            </div>
            <div className="product-title">Blazer Open Front</div>
            <div className="product-price"><span className="old-price" data-format="money">$300.00</span> <span className="current-price" data-format="money">$180.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">0</div>
            <div className="discount" data-format="int">60</div>
            <div className="product-image">
                <img src="images/product_3.png" />
                <div className="badge inside bg-red fg-white">-60%</div>
                <div data-role="countdown" data-days="2" data-animate="slide"></div>
            </div>
            <div className="product-title">Bow tie neck swing</div>
            <div className="product-price"><span className="old-price" data-format="money">$300.00</span> <span className="current-price" data-format="money">$180.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">10</div>
            <div className="discount" data-format="int">10</div>
            <div className="product-image">
                <img src="images/product_4.png" />
                <div className="badge inside bg-red fg-white">-10%</div>
                <div data-role="countdown" data-days="30" data-animate="slide"></div>
            </div>
            <div className="product-title">Color Block Tunic Shirt</div>
            <div className="product-price"><span className="old-price">$200.00</span> <span className="current-price" data-format="money">$180.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">4</div>
            <div className="product-image">
                <img src="images/product_5.png" />
            </div>
            <div className="product-title">Contrast Shawl Collar</div>
            <div className="product-price"><span className="current-price" data-format="money">$580.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">12</div>
            <div className="product-image">
                <img src="images/product_6.png" />
            </div>
            <div className="product-title">Drapey Open Cardigan</div>
            <div className="product-price"><span className="current-price" data-format="money">$480.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">20</div>
            <div className="product-image">
                <img src="images/product_7.png" />
                <div className="badge inside bg-green fg-white enlarge-2">Bestseller</div>
            </div>
            <div className="product-title">Flapper Dress Accessories</div>
            <div className="product-price"><span className="current-price" data-format="money">$120.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">54</div>
            <div className="product-image">
                <img src="images/product_8.png" />
                <div className="badge inside bg-green fg-white enlarge-2">Bestseller</div>
            </div>
            <div className="product-title">Full-Zip Polar Jacket</div>
            <div className="product-price"><span className="current-price" data-format="money">$260.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">36</div>
            <div className="product-image">
                <img src="images/product_9.png" />
                <div className="badge inside bg-green fg-white enlarge-2">Bestseller</div>
            </div>
            <div className="product-title">Lace Bodycon Dress</div>
            <div className="product-price"><span className="current-price" data-format="money">$260.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">45</div>
            <div className="product-image">
                <img src="images/product_10.png" />
                <div className="badge inside bg-green fg-white enlarge-2">Bestseller</div>
            </div>
            <div className="product-title">Men Stylist Tank Tops</div>
            <div className="product-price"><span className="current-price" data-format="money">$410.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">13</div>
            <div className="product-image">
                <img src="images/product_11.png" />
            </div>
            <div className="product-title">Neck Reverse Pleat</div>
            <div className="product-price"><span className="current-price" data-format="money">$150.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">0</div>
            <div className="product-image">
                <img src="images/product_12.png" />
            </div>
            <div className="product-title">Neck Ruffle Polka</div>
            <div className="product-price"><span className="current-price" data-format="money">$350.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">0</div>
            <div className="product-image">
                <img src="images/product_13.png" />
            </div>
            <div className="product-title">Peak Lapel Pants Suit</div>
            <div className="product-price"><span className="current-price" data-format="money">$480.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">0</div>
            <div className="product-image">
                <img src="images/product_14.png" />
            </div>
            <div className="product-title">Rolled Sleeve Shirt</div>
            <div className="product-price"><span className="current-price" data-format="money">$345.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">0</div>
            <div className="product-image">
                <img src="images/product_15.png" />
            </div>
            <div className="product-title">Sexy Halter Neck Short</div>
            <div className="product-price"><span className="current-price" data-format="money">$105.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">0</div>
            <div className="product-image">
                <img src="images/product_16.png" />
            </div>
            <div className="product-title">Sexy Women Sleeveless</div>
            <div className="product-price"><span className="current-price" data-format="money">$150.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">0</div>
            <div className="product-image">
                <img src="images/product_17.png" />
            </div>
            <div className="product-title">Skinny Ankle Jean</div>
            <div className="product-price"><span className="current-price" data-format="money">$110.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">0</div>
            <div className="product-image">
                <img src="images/product_18.png" />
            </div>
            <div className="product-title">Skinny Stretch Jegging</div>
            <div className="product-price"><span className="current-price" data-format="money">$220.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">0</div>
            <div className="product-image">
                <img src="images/product_19.png" />
            </div>
            <div className="product-title">Trousers Ponte Knit</div>
            <div className="product-price"><span className="current-price" data-format="money">$105.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">0</div>
            <div className="product-image">
                <img src="images/product_20.png" />
            </div>
            <div className="product-title">V-Neck Pullover Cashmere</div>
            <div className="product-price"><span className="current-price" data-format="money">$360.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">0</div>
            <div className="product-image">
                <img src="images/product_21.png" />
            </div>
            <div className="product-title">Wedgie Icon Jeans</div>
            <div className="product-price"><span className="current-price" data-format="money">$105.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">0</div>
            <div className="product-image">
                <img src="images/product_22.png" />
            </div>
            <div className="product-title">Women Supersoft Terry</div>
            <div className="product-price"><span className="current-price" data-format="money">$150.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">0</div>
            <div className="product-image">
                <img src="images/product_23.png" />
            </div>
            <div className="product-title">Womens Cosima Tops</div>
            <div className="product-price"><span className="current-price" data-format="money">$195.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>

        <li className="product-list-item">
            <div className="sales" data-format="int">0</div>
            <div className="product-image">
                <img src="images/product_24.png" />
            </div>
            <div className="product-title">Womens Sleepshirt Cotton</div>
            <div className="product-price"><span className="current-price" data-format="money">$100.00</span></div>
            <div className="product-desc">
                Advanced Features Shopify Theme Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in...
            </div>
            <div className="product-actions">
                <button className="button success"><span className="mif-add-shopping-cart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button warning"><span className="mif-heart"></span></button>
                <button className="button"><span className="mif-balance-scale"></span></button>
                <button className="button alert">Buy Now</button>
            </div>
        </li>
    </ul>
</div>
    );
}
}

export default Start;
