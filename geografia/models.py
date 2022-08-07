from django.db import models

# Create your models here.


class Pais(models.Model):
    nombre = models.CharField(max_length=50)
    numero_habitantes = models.PositiveIntegerField()

    def __str__(self) -> str:
        return "{}".format(self.nombre)

    class Meta:
        db_table = 'pais'


class Ciudad(models.Model):
    nombre = models.CharField(max_length=100)
    alcalde = models.CharField(max_length=100)
    pais = models.ForeignKey(Pais, null=False, blank=False, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return "{} ({})".format(self.nombre, self.pais.nombre)

    class Meta:
        db_table = 'ciudad'
