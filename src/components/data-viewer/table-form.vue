<script>
// компонент, позволяющий создавать свои таблицы с выбранным набором полей
export default {
    
    name: 'table-form',

    data() {
        return {
            props: [],
            
            dataList: 
            // в идеальном варианте будет передаваться через глобальное состояние 
            // и / или localStorage,
            // а создаваться в отдельной форме, с более сложными настройками,
            // такими как required и т.п.,
            // и с ограниченными правами доступа
            [
                {
                    title: '',
                    data: {
                        firstName: 'имя',
                        lastName: 'фамилия',
                        company: 'место работы'
                    }
                }, {
                    title: 'Контактные данные',
                    data: {
                        phone: 'телефон',
                        email: 'e-mail',
                        address: 'адрес'
                    }
                }, {
                    title: 'Данные сервиса',
                    data: {
                    // поле 'id' обязательно
                        id: 'ID',
                        registered: 'дата регистрации',
                        isActive: 'активность',
                        accessLevel: 'статус',
                        balance: 'баланс'
                    }
                }, {
                    title: 'Дополнительно',
                    data: {
                        picture: 'фото',
                        age: 'возраст',
                        about: 'биография'
                    }
                }
            ]
        }
    },
    
    methods: {
        // создает массив полей, с которыми будет построена новая таблица
        changeProps(prop, value) {

            if (value) {
                this.props.push(prop)
                return
            }
            
            this.props = this.props.filter(item => item !== prop)
        },
        
        submit() {
            this.$emit('submit', this.props)
        }
    }
}
</script>
<template>
    <form class="user-form bg-light clearfix">
        <h2 class="font-weight-normal h6 bg-dark text-light p-3 m-0 mb-4 text-uppercase">
            Выберите нужное
        </h2>
        <div class="form-group px-4" v-for="item in dataList" :key="item.data[0]">
            <h4 class="h6 mb-3" v-if="item.title"> {{ item.title }} </h4>

            <div class="form-check-inline w-25 ml-5" v-for="(propValue, prop) in item.data" :key="prop">
                <input type="checkbox" 
                    class="form-check-input" 
                    :name="prop" 
                    @input="changeProps(prop, $event.target.checked)">
                <label :for="prop" class="form-check-label"> {{ propValue }} </label>
            </div>
            <hr>
                    
        </div>
        <button type="submit" 
            @click.prevent="submit" 
            class="btn btn-dark float-right mb-4 mr-4">
            Создать таблицу
        </button>
    </form>

</template>
