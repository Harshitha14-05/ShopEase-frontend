import { Product } from '../types';

export const products: Product[] = [
  // Electronics Category
  {
    id: 'elec-1',
    title: 'Premium Wireless Headphones',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 2847,
    category: 'Electronics',
    description: 'High-quality wireless headphones with noise cancellation'
  },
  {
    id: 'elec-2',
    title: 'Smartphone Pro Max',
    price: 899.99,
    originalPrice: 1099.99,
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 1523,
    category: 'Electronics'
  },
  {
    id: 'elec-3',
    title: 'Laptop Ultra Thin',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 892,
    category: 'Electronics'
  },
  {
    id: 'elec-4',
    title: 'Smart Watch Series X',
    price: 399.99,
    originalPrice: 499.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    reviews: 3421,
    category: 'Electronics'
  },
  {
    id: 'elec-5',
    title: 'Wireless Speaker',
    price: 129.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.4,
    reviews: 756,
    category: 'Electronics'
  },
  {
    id: 'elec-6',
    title: 'Gaming Keyboard RGB',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 1834,
    category: 'Electronics'
  },
  {
    id: 'elec-7',
    title: 'Wireless Mouse Pro',
    price: 59.99,
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.3,
    reviews: 967,
    category: 'Electronics'
  },
  {
    id: 'elec-8',
    title: '4K Monitor 27"',
    price: 449.99,
    originalPrice: 599.99,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 1245,
    category: 'Electronics'
  },
  {
    id: 'elec-9',
    title: 'Tablet Pro 11"',
    price: 799.99,
    image: 'https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 2156,
    category: 'Electronics'
  },
  {
    id: 'elec-10',
    title: 'Webcam HD Pro',
    price: 99.99,
    image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.4,
    reviews: 678,
    category: 'Electronics'
  },
  {
    id: 'elec-11',
    title: 'Power Bank 20000mAh',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.pexels.com/photos/4792345/pexels-photo-4792345.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    reviews: 1432,
    category: 'Electronics'
  },

  // Fashion Category
  {
    id: 'fashion-1',
    title: 'Classic Denim Jacket',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 892,
    category: 'Fashion'
  },
  {
    id: 'fashion-2',
    title: 'Premium Cotton T-Shirt',
    price: 29.99,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 1456,
    category: 'Fashion'
  },
  {
    id: 'fashion-3',
    title: 'Leather Boots',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 743,
    category: 'Fashion'
  },
  {
    id: 'fashion-4',
    title: 'Summer Dress',
    price: 59.99,
    image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    reviews: 2341,
    category: 'Fashion'
  },
  {
    id: 'fashion-5',
    title: 'Business Suit',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 567,
    category: 'Fashion'
  },
  {
    id: 'fashion-6',
    title: 'Casual Sneakers',
    price: 89.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.4,
    reviews: 1823,
    category: 'Fashion'
  },
  {
    id: 'fashion-7',
    title: 'Designer Handbag',
    price: 179.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 934,
    category: 'Fashion'
  },
  {
    id: 'fashion-8',
    title: 'Wool Sweater',
    price: 69.99,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    reviews: 1287,
    category: 'Fashion'
  },
  {
    id: 'fashion-9',
    title: 'Baseball Cap',
    price: 24.99,
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.3,
    reviews: 2156,
    category: 'Fashion'
  },
  {
    id: 'fashion-10',
    title: 'Sunglasses UV Protection',
    price: 49.99,
    originalPrice: 79.99,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 1543,
    category: 'Fashion'
  },
  {
    id: 'fashion-11',
    title: 'Formal Watch',
    price: 199.99,
    image: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 892,
    category: 'Fashion'
  },

  // Home & Garden Category
  {
    id: 'home-1',
    title: 'Modern Table Lamp',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 756,
    category: 'Home & Garden'
  },
  {
    id: 'home-2',
    title: 'Decorative Plant Pot',
    price: 34.99,
    image: 'https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    reviews: 1234,
    category: 'Home & Garden'
  },
  {
    id: 'home-3',
    title: 'Throw Pillow Set',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 1876,
    category: 'Home & Garden'
  },
  {
    id: 'home-4',
    title: 'Wall Mirror Large',
    price: 129.99,
    image: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.4,
    reviews: 543,
    category: 'Home & Garden'
  },
  {
    id: 'home-5',
    title: 'Coffee Table Modern',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 687,
    category: 'Home & Garden'
  },
  {
    id: 'home-6',
    title: 'Area Rug 5x7',
    price: 179.99,
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 923,
    category: 'Home & Garden'
  },
  {
    id: 'home-7',
    title: 'Kitchen Utensil Set',
    price: 59.99,
    originalPrice: 89.99,
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    reviews: 1543,
    category: 'Home & Garden'
  },
  {
    id: 'home-8',
    title: 'Bedding Set Queen',
    price: 99.99,
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 2187,
    category: 'Home & Garden'
  },
  {
    id: 'home-9',
    title: 'Garden Tool Set',
    price: 79.99,
    originalPrice: 109.99,
    image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.4,
    reviews: 765,
    category: 'Home & Garden'
  },
  {
    id: 'home-10',
    title: 'Dining Chair Set',
    price: 199.99,
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 432,
    category: 'Home & Garden'
  },
  {
    id: 'home-11',
    title: 'Wall Art Canvas',
    price: 69.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 1098,
    category: 'Home & Garden'
  },

  // Sports Category
  {
    id: 'sports-1',
    title: 'Yoga Mat Premium',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 1892,
    category: 'Sports'
  },
  {
    id: 'sports-2',
    title: 'Dumbbell Set 20kg',
    price: 89.99,
    image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 743,
    category: 'Sports'
  },
  {
    id: 'sports-3',
    title: 'Running Shoes',
    price: 119.99,
    originalPrice: 149.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 2345,
    category: 'Sports'
  },
  {
    id: 'sports-4',
    title: 'Tennis Racket Pro',
    price: 149.99,
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    reviews: 567,
    category: 'Sports'
  },
  {
    id: 'sports-5',
    title: 'Basketball Official',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.4,
    reviews: 1234,
    category: 'Sports'
  },
  {
    id: 'sports-6',
    title: 'Fitness Tracker',
    price: 79.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 1876,
    category: 'Sports'
  },
  {
    id: 'sports-7',
    title: 'Swimming Goggles',
    price: 19.99,
    originalPrice: 29.99,
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.3,
    reviews: 987,
    category: 'Sports'
  },
  {
    id: 'sports-8',
    title: 'Protein Shaker',
    price: 14.99,
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    reviews: 1543,
    category: 'Sports'
  },
  {
    id: 'sports-9',
    title: 'Resistance Bands Set',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 2109,
    category: 'Sports'
  },
  {
    id: 'sports-10',
    title: 'Water Bottle Steel',
    price: 19.99,
    image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.4,
    reviews: 1432,
    category: 'Sports'
  },
  {
    id: 'sports-11',
    title: 'Exercise Ball',
    price: 34.99,
    originalPrice: 49.99,
    image: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 876,
    category: 'Sports'
  }
];

export const categories = ['All', 'Electronics', 'Fashion', 'Home & Garden', 'Sports'];

export const heroSlides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Mega Electronics Sale',
    subtitle: 'Up to 50% off on all electronics',
    buttonText: 'Shop Now',
    buttonLink: '#electronics'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Fashion Week Special',
    subtitle: 'Trendy styles at unbeatable prices',
    buttonText: 'Explore Fashion',
    buttonLink: '#fashion'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Transform Your Home',
    subtitle: 'Beautiful furniture and decor items',
    buttonText: 'Shop Home',
    buttonLink: '#home'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Get Fit, Stay Healthy',
    subtitle: 'Premium sports equipment for all',
    buttonText: 'Shop Sports',
    buttonLink: '#sports'
  }
];