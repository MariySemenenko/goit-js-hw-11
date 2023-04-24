
import axios from 'axios';


axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = 'Client-ID 35692363 -35692363-708937b69116888a5fb6ef1bd';
const API_KEY = '35692363-708937b69116888a5fb6ef1bd';
  //використовую клас PixabayAPI для отримання нанних з сайту Pixabay
export class PixabayAPI { //приватні властивості класу
    #page = 1;
    #per_page = 40;
    #query = '';
    #totalPages = 0;


    // повертає дані з API сайту Pixabay
    async getPhotos() {
        const params = { //params: містить параметри запиту
            page: this.#page,
            q: this.#query,
            per_page: this.#per_page,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        }


        const urlAXIOS = `?key=${API_KEY}`;
        

        const { data } = await axios.get(urlAXIOS, { params, });//передаю params у axios.get
        return data; //повертаю дані відповіді в форматі JSON
    }

    get query() {//гетер повертає зеачення
        this.#query;
    }

    set query(newQuery) { //сетер встановлює передане значення
        this.#query = newQuery;
    }

    incrementPage() { //збільшую на 1
        this.#page += 1;
    }

    resetPage() { //скидаю значення на 1
        this.#page = 1;
    }

    setTotal(total) {//задаю значення властивості 'totalPages'
        this.#totalPages = total;
    }

    hasMorePhotos() {//перевіряю чи э фотографії для завантаження
        return this.#page < Math.ceil(this.#totalPages / this.#per_page);
    }
}