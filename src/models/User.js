module.exports = (sequelize,DataType) => {
    const User = sequelize.define("User", {
        // id: {
        //     type:DataType.INTEGER,
        //     primaryKey:true,
        //     autoIncrement:true
        // },
        
        nome: DataType.STRING,
        email: DataType.STRING,
        senha: DataType.STRING,
        celular:DataType.STRING
    },{
        tableName:'users',
    })

    /*User.associate = (models) => {
        User.hasMany(models.Company, {
            foreignKey: 'user_id',
            as: 'companies'
        });
    } */

    return User;
}