import Product from "./Product"

const Products = () => {
    return (
        <div>
            <h1>Supershop</h1>

            <section className="grid">
                <Product
                    imgUrl={'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000'}
                    productTitle={'IPhone 12 pro'}
                    productPrice={"1289,00 €"}
                    productLink={'https://www.amazon.de/-/en/Apple-iPhone-12-Pro-Max/dp/B08L5TF4D4/ref=sr_1_4?crid=B20LMH6WEC4C&dchild=1&keywords=iphone+12+pro&qid=1615554334&sprefix=iph%2Caps%2C186&sr=8-4'}
                />
                <Product
                    imgUrl={'https://www.telekom.de/resources/images/608590/motorola-razr-5g-schwarz-hero.png'}
                    productTitle={'Motorola razr 5g'}
                    productPrice={"1499,99 €"}
                    productLink={'https://www.amazon.de/Motorola-Smartphone-Display-External-Exclusive/dp/B08HJBQBY5/ref=sr_1_1_sspa?dchild=1&keywords=Motorola+razr+5g&qid=1615554711&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNFlFSzNDWE1UU0JKJmVuY3J5cHRlZElkPUEwNjk3MzY5MUVZNVRJS1lCSkhOUSZlbmNyeXB0ZWRBZElkPUEwODMzNDM5MkxHVE5LWlRaV1lFRyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU='}
                />
                <Product
                    imgUrl={'https://images.samsung.com/is/image/samsung/de/galaxy-note20/gallery/de-galaxy-z-fold2-f916b-sm-f916bznadbt-frontmysticbronze-273836109'}
                    productTitle={'Samsung Galaxy Z '}
                    productPrice={"1289,00 €"}
                    productLink={'https://www.amazon.de/-/en/Samsung-smartphone-contract-infinity-display-Black/dp/B08QZV985V/ref=sr_1_4?dchild=1&keywords=samsung+galaxy+z+fold2+5g&qid=1615554969&sr=8-4'}
                />
                <Product
                    imgUrl={'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/mate-x-s/img/huawei_mate_xs.png'}
                    productTitle={'huawei mate xs'}
                    productPrice={"2499,99 €"}
                    productLink={'https://consumer.huawei.com/de/phones/mate-x-s/buy/?skuCode=8249100002301&gclid=Cj0KCQiAv6yCBhCLARIsABqJTjY7Nduxv_Xoy9HO-JzWv3lgqc61GH5JB5NefUzp_C6UJ4zNxSMfctEaArAzEALw_wcB'}
                />
            </section>

        </div>
    );
}

export default Products;